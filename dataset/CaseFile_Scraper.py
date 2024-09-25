from bs4 import BeautifulSoup
import requests
import re
import os


class CaseFile_Scraper():
    def __init__(self, doi: str, pmid: str):

        self.doi = doi
        self.page_url = f"https://sci-hub.se/{self.doi}"
        self.pmid = pmid
        self.file_name = pmid + ".pdf"
        self.pdf_url = None

    def fetch_page(self):

        try:
            page_response = requests.get(self.page_url)
            page_response.raise_for_status()

            if page_response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
            else:
                print(f"Error fetching the page: {page_response.status_code} {page_response.reason}")

            return soup

        except requests.exceptions.RequestException as e:
            print(f"Error fetching the page: {e}")

            return None

    def extract_url(self, soup):
        onclick_element = soup.find_all('button', onclick=True)

        if not onclick_element:
            print("No buttons with 'onclick' attribute found on the page.")
            return None

        try:
            parsed_element = str(onclick_element[0])
            pattern = r"location\.href\s*=\s*['\"]([^'\"]+)['\"]"
            match = re.search(pattern, parsed_element)

            if match:
                self.pdf_url = "https:" + match.group(1)
                return self.pdf_url
            else:
                print("PDF URL not found in the parsed element.")
                return None

        except IndexError:
            print("Error parsing the element.")
            return None

    def download_pdf(self):

        if not self.pdf_url:
            print("PDF URL not available for download.")
            return

        url_response = requests.get(self.pdf_url)

        path = f'dataset/final_data/{self.pmid}'

        os.makedirs(path, exist_ok=True)

        file_path = os.path.join(path, self.file_name)

        with open(file_path, 'wb') as pdf_file:
            pdf_file.write(url_response.content)
            print(f"Downloaded and saved as {self.file_name}")

    def scrape_and_download(self):

        soup = self.fetch_page()

        if self.extract_url(soup):

            self.download_pdf()
