# PowerShell Script to Standardize Header Across All HTML Files
# Fixes: 1) Adds hamburger menu to all pages
#        2) Adds language switcher to all pages
#        3) Removes duplicate icons

$files = @(
    'index.html',
    'about.html',
    'services.html',
    'projects.html',
    'blog.html',
    'contact.html',
    'faq.html',
    'single-service.html',
    'single-project.html',
    'single-blog.html'
)

$standardHeaderActions = @'
            <div class="header-actions flex items-center">
                <select id="lang-switcher" class="lang-switcher">
                    <option value="en">EN</option>
                    <option value="hi">HI</option>
                    <option value="mr">MR</option>
                </select>
                
                <button id="mobile-menu-toggle" class="mobile-menu-toggle mobile-only" aria-expanded="false" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <a href="contact.html" class="btn btn-primary" data-i18n="header.cta">Get Started</a>
            </div>
'@

foreach ($file in $files) {
    $path = "E:\Kabirji Folder\Project on github\Major-Project\Kabir\testing-2\src\$file"
    
    if (Test-Path $path) {
        $content = Get-Content $path -Raw -Encoding UTF8
        
        # Pattern 1: Contact.html style (has duplicates and lang switcher)
        $pattern1 = '(?s)<div class="header-actions flex items-center">.*?<\/div>\s*<\/div>\s*<\/header>'
        
        # Replacement: Standard header-actions + close divs
        $replacement = $standardHeaderActions + "`r`n        </div>`r`n    </header>"
        
        if ($content -match $pattern1) {
            $content = $content -replace $pattern1, $replacement
            Set-Content $path -Value $content -Encoding UTF8
            Write-Host "Updated: $file (replaced header-actions)"
        } else {
            Write-Host "SKIPPED: $file (pattern not found)"
        }
    } else {
        Write-Host "NOT FOUND: $file"
    }
}

Write-Host "`nDone! Header standardized across all pages."
