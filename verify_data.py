#!/usr/bin/env python3
"""
Data Verification Script for Forensics Europe Expo 2026
This script verifies that the content in the Document Library matches the survey data
"""

from pypdf import PdfReader
import re

def extract_org_data(text):
    """Extract organization types from Q1"""
    data = {}
    # Look for specific organizations with percentages
    patterns = [
        (r'Forensic Service Provider.*?(\d+\.\d+)%', 'Forensic Service Provider'),
        (r'Academic.*Research.*Institution.*?(\d+\.\d+)%', 'Academic/Research Institution'),
        (r'Private Sector.*Organisation.*?(\d+\.\d+)%', 'Private Sector Organisation'),
        (r'Consultancy.*?(\d+\.\d+)%', 'Consultancy'),
        (r'Police.*?(\d+\.\d+)%', 'Police'),
        (r'Central Government.*?(\d+\.\d+)%', 'Central Government'),
        (r'Local Authority.*?(\d+\.\d+)%', 'Local Authority'),
        (r'Laboratory.*?\(Public\).*?(\d+\.\d+)%', 'Laboratory (Public)'),
        (r'Laboratory.*?\(Private\).*?(\d+\.\d+)%', 'Laboratory (Private)'),
        (r'Digital Forensics Unit.*?(\d+\.\d+)%', 'Digital Forensics Unit'),
        (r'Technology Company.*?(\d+\.\d+)%', 'Technology Company/Supplier'),
        (r'Fire.*Rescue.*?(\d+\.\d+)%', 'Fire & Rescue'),
    ]
    for pattern, label in patterns:
        match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
        if match:
            data[label] = f"{match.group(1)}%"
    return data

def extract_geo_data(text):
    """Extract geographic location from Q2"""
    data = {}
    # International
    intl_match = re.search(r'International.*?(\d+\.\d+)%\s+(\d+)', text, re.IGNORECASE)
    if intl_match:
        data['International'] = f"{intl_match.group(1)}%"
    
    # UK regions
    patterns = [
        (r'London.*?(\d+\.\d+)%', 'London'),
        (r'South East.*?(\d+\.\d+)%', 'South East'),
        (r'East of England.*?(\d+\.\d+)%', 'East of England'),
    ]
    for pattern, label in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            data[label] = f"{match.group(1)}%"
    return data

def extract_motivation_data(text):
    """Extract motivations from Q5"""
    data = {}
    # Look for the percentages listed with motivations
    # Usually: percentage, count, motivation text
    pattern = r'(\d+\.\d+)%\s+\d+\s*\n\s*(CPD.*Professional Development|Keep up with sector|Learn about new.*techniques|Source products|Network.*collaborate|Identify best practice|See live demonstrations)'
    matches = re.findall(pattern, text, re.IGNORECASE | re.MULTILINE)
    
    # Alternative: extract all motivation text and map to nearby percentages
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if 'CPD' in line:
            # Look for percentage in nearby context
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['CPD/Professional Development'] = f"{pct_match.group(1)}%"
        elif 'Network' in line and 'collaborate' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Network and collaborate with peers'] = f"{pct_match.group(1)}%"
        elif 'Keep up with sector' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Keep up with sector challenges and developments'] = f"{pct_match.group(1)}%"
        elif 'Learn about new' in line and 'technologies' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Learn about new forensic techniques and technologies'] = f"{pct_match.group(1)}%"
        elif 'Source products' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Source products and solutions'] = f"{pct_match.group(1)}%"
    
    return data

def extract_content_data(text):
    """Extract content stream preferences from Q6"""
    data = {}
    # Content streams with percentages
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if 'Mobile & Data Forensics' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Mobile & Data Forensics'] = f"{pct_match.group(1)}%"
        elif 'Scenes of Crime' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Scenes of Crime'] = f"{pct_match.group(1)}%"
        elif 'Laboratory Sciences' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Laboratory Sciences'] = f"{pct_match.group(1)}%"
    
    return data

def extract_product_data(text):
    """Extract product interests from Q7"""
    data = {}
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if 'Digital forensics' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Digital forensics software & hardware'] = f"{pct_match.group(1)}%"
        elif 'Scenes of Crime' in line and 'equipment' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Scenes of Crime equipment'] = f"{pct_match.group(1)}%"
    
    return data

def extract_procurement_data(text):
    """Extract procurement roles from Q8"""
    data = {}
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if 'Research' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match and 'Decision' not in context:
                data['Research'] = f"{pct_match.group(1)}%"
        elif 'Recommend' in line or 'Specify' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Recommend/Specify'] = f"{pct_match.group(1)}%"
        elif 'Decision Maker' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['Decision Maker'] = f"{pct_match.group(1)}%"
    
    return data

def extract_competitor_data(text):
    """Extract competitor event attendance from Q4"""
    data = {}
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if 'Blue Light Show' in line or 'The Blue Light Show' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['The Blue Light Show'] = f"{pct_match.group(1)}%"
        elif 'International Security Expo' in line:
            context = '\n'.join(lines[max(0, i-3):i+3])
            pct_match = re.search(r'(\d+\.\d+)%', context)
            if pct_match:
                data['International Security Expo'] = f"{pct_match.group(1)}%"
    
    return data

def main():
    print("=== Forensics Europe Expo 2026 Data Verification ===\n")
    
    # Parse survey PDF
    pdf_path = "/Users/mitov/VsCode/edge-forensics-2026/materials/Data_All_251125 (1).pdf"
    print(f"Parsing survey PDF: {pdf_path}")
    reader = PdfReader(pdf_path)
    
    pdf_data = {}
    
    for i, page in enumerate(reader.pages):
        page_text = page.extract_text() + "\n"
        
        # Extract data based on question page mappings
        if i == 1 or i == 0:  # Q1 - Organization types
            pdf_data.update(extract_org_data(page_text))
        
        if i == 2 or i == 3:  # Q2 - Location
            pdf_data.update(extract_geo_data(page_text))
        
        if i == 7 or i == 8:  # Q5 - Motivations
            pdf_data.update(extract_motivation_data(page_text))
        
        if i == 8:  # Q6 - Content streams
            pdf_data.update(extract_content_data(page_text))
        
        if i == 9 or i == 10:  # Q7 - Products
            pdf_data.update(extract_product_data(page_text))
        
        if i == 11 or i == 12:  # Q8 - Procurement roles
            pdf_data.update(extract_procurement_data(page_text))
        
        if i == 5 or i == 6:  # Q4 - Competitor events
            pdf_data.update(extract_competitor_data(page_text))
    
    print(f"\nExtracted {len(pdf_data)} data points from PDF\n")
    print("=== PDF DATA ===")
    for key, value in sorted(pdf_data.items()):
        print(f"  {key}: {value}")
    
    # Parse markdown files
    md_files = [
        "/Users/mitov/VsCode/edge-forensics-2026/public/media/V4 - Marketplace Intelligence Report: Strategic Positioning for Forensics Europe Expo 2026.md",
        "/Users/mitov/VsCode/edge-forensics-2026/public/media/V4 - Forensics Europe Expo 2026: Sales & Monetization Roadmap.md",
        "/Users/mitov/VsCode/edge-forensics-2026/public/media/V4 - Executive Summary: Strategic Direction for Forensics Europe Expo 2026.md"
    ]
    
    md_data = {}
    for md_file in md_files:
        print(f"\nParsing {md_file.split('/')[-1]}...")
        with open(md_file, 'r', encoding='utf-8') as f:
            text = f.read()
        
        # Extract all percentages with their context
        lines = text.split('\n')
        for line in lines:
            # Extract percentages
            pct_matches = re.findall(r'(\d+\.\d+)%', line)
            if pct_matches:
                # Extract the label or context
                label_match = re.search(r'[^:*\n]+[:*]?\s*(?:\*\*)?(\d+\.\d+%)', line)
                if not label_match:
                    # Try to extract from previous lines
                    label_match = re.search(r'[^:*\n]+[:*]\s*(?:\*\*)?(\d+\.\d+%)', line)
                
                # Store with some context
                context = re.sub(r'\*\*', '', line)[:80]
                md_data[context.strip()] = pct_matches[0] + "%"
    
    print(f"\nExtracted {len(md_data)} data points from markdown files")
    print("=== MARKDOWN DATA (first 30) ===")
    for i, (key, value) in enumerate(sorted(md_data.items())[:30]):
        print(f"  {key}: {value}")
    
    # Compare key values
    print("\n\n=== VERIFICATION OF KEY VALUES ===")
    key_values = {
        'Forensic Service Provider': pdf_data.get('Forensic Service Provider'),
        'International': pdf_data.get('International'),
        'London': pdf_data.get('London'),
        'South East': pdf_data.get('South East'),
        'CPD/Professional Development': pdf_data.get('CPD/Professional Development'),
        'Mobile & Data Forensics': pdf_data.get('Mobile & Data Forensics'),
        'Scenes of Crime': pdf_data.get('Scenes of Crime'),
        'Digital forensics software & hardware': pdf_data.get('Digital forensics software & hardware'),
        'Scenes of Crime equipment': pdf_data.get('Scenes of Crime equipment'),
        'The Blue Light Show': pdf_data.get('The Blue Light Show'),
    }
    
    discrepancies = []
    for key, pdf_value in key_values.items():
        if pdf_value:
            # Check if this value appears in markdown
            found = any(pdf_value in md_value and pdf_value == md_value[2:] for md_value in md_data.values())  # Remove % from comparison
            print(f"{key}: {pdf_value} - {'Found in markdown' if found else 'NOT FOUND in markdown'}")
            if not found:
                discrepancies.append((key, pdf_value))
    
    if discrepancies:
        print(f"\n{'='*60}")
        print(f"FOUND {len(discrepancies)} DISCREPANCIES:")
        print(f"{'='*60}")
        for key, pdf_value in discrepancies:
            print(f"  {key}: {pdf_value} - NOT FOUND in markdown")
    else:
        print(f"\n{'='*60}")
        print("ALL KEY VALUES VERIFIED - NO DISCREPANCIES FOUND!")
        print(f"{'='*60}")

if __name__ == "__main__":
    main()
