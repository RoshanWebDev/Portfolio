import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      executablePath: 'C:\\Users\\Roshan\\.cache\\puppeteer\\chrome-headless-shell\\win64-150.0.7871.24\\chrome-headless-shell-win64\\chrome-headless-shell.exe'
    });
    const page = await browser.newPage();
    
    // Set a desktop viewport
    await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 2 });
    
    console.log('Navigating to http://localhost:3001...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'public/portfolio-preview.png', fullPage: false });
    
    await browser.close();
    console.log('Screenshot saved to public/portfolio-preview.png');
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    process.exit(1);
  }
})();
