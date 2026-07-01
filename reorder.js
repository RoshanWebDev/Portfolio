const fs = require('fs');
const content = fs.readFileSync('src/components/Projects.jsx', 'utf8');

const c1Match = content.match(/\{\/\* Card \d+ \*\/\}\s*<div className="aw-project-card glass-card">[\s\S]*?<span className="aw-number">01<\/span>[\s\S]*?<div className="aw-card-glow"><\/div>\s*<\/div>/);
const c4Match = content.match(/\{\/\* Card \d+ \*\/\}\s*<div className="aw-project-card glass-card">[\s\S]*?<span className="aw-number">04<\/span>[\s\S]*?<div className="aw-card-glow"><\/div>\s*<\/div>/);
const c5Match = content.match(/\{\/\* Card \d+ \*\/\}\s*<div className="aw-project-card glass-card">[\s\S]*?<span className="aw-number">05<\/span>[\s\S]*?<div className="aw-card-glow"><\/div>\s*<\/div>/);
const c6Match = content.match(/\{\/\* Card \d+ \*\/\}\s*<div className="aw-project-card glass-card">[\s\S]*?<span className="aw-number">06<\/span>[\s\S]*?<div className="aw-card-glow"><\/div>\s*<\/div>/);
const c8Match = content.match(/\{\/\* Card \d+ \*\/\}\s*<div className="aw-project-card glass-card">[\s\S]*?<span className="aw-number">08<\/span>[\s\S]*?<div className="aw-card-glow"><\/div>\s*<\/div>/);

let c1 = c1Match[0].replace(' tabIndex="-1"', '');
let c4 = c4Match[0].replace(' tabIndex="-1"', '');
let c5 = c5Match[0].replace(' tabIndex="-1"', '');
let c6 = c6Match[0].replace(' tabIndex="-1"', '');
let c8 = c8Match[0].replace(' tabIndex="-1"', '');

function addTabIndex(c) {
    if (!c.includes('tabIndex="-1"')) {
        return c.replace('aria-label="Live Preview"', 'aria-label="Live Preview" tabIndex="-1"');
    }
    return c;
}

let c1_t = addTabIndex(c1);
let c4_t = addTabIndex(c4);
let c5_t = addTabIndex(c5);
let c6_t = addTabIndex(c6);
let c8_t = addTabIndex(c8);

const track1 = `          <div className="projects-track marquee-content">
            
            ${c1}

            ${c4}

            ${c5}

            ${c6}

            ${c8}
            
          </div>`;

const track2 = `          {/* Duplicated for infinite scroll */}
          <div className="projects-track marquee-content" aria-hidden="true">
            ${c1_t}

            ${c4_t}

            ${c5_t}

            ${c6_t}

            ${c8_t}
            
          </div>`;

const wrapper = `        <div className="marquee-wrapper">
${track1}
          
${track2}
        </div>`;

const newContent = content.replace(/<div className="marquee-wrapper">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, wrapper + '\n      </div>\n    </section>');
fs.writeFileSync('src/components/Projects.jsx', newContent);
console.log("Done");
