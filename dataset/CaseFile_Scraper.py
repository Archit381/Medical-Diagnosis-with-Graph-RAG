from bs4 import BeautifulSoup
import requests
import re

class CaseFile_Scraper():
    def __init__(self, doi: str, pmid: str):

        self.doi = doi
        self.page_url = f"https://sci-hub.se/{self.doi}"
        self.file_name = pmid + ".pdf"
        self.pdf_url = None

    def fetch_page(self):

        page_response = requests.get(self.page_url)
        soup = BeautifulSoup(page_response.content, 'html.parser')

        return soup

    def extract_url(self, soup):

        onclick_element = soup.find_all('button', onclick = True)

        parsed_element = str(onclick_element[0])

        pattern = r"location\.href\s*=\s*['\"]([^'\"]+)['\"]"
        match = re.search(pattern, parsed_element)

        self.pdf_url = "https:" + match.group(1)

        return self.pdf_url
    
    def download_pdf(self):

        if not self.pdf_url:
            print("PDF URL not available for download.")
            return

        url_response = requests.get(self.pdf_url)

        with open(self.file_name, 'wb') as pdf_file:
                pdf_file.write(url_response.content)
                print(f"Downloaded and saved as {self.file_name}")
        
    def scrape_and_download(self):

        soup = self.fetch_page()

        if self.extract_url(soup):

            self.download_pdf()

id_ = "10.1258/arsr.2012.120031"
scraper = CaseFile_Scraper(doi=id_, pmid=str(23986846))
scraper.scrape_and_download()