# Deployment Guide for Hostinger

## Pre-deployment Checklist
1. Ensure all changes are committed and tested locally
2. Check that `next.config.js` has:
   - `output: 'export'`
   - `trailingSlash: true`
   - `images: { unoptimized: true }`

## Build Process
1. Run the build command:
   ```bash
   npm run build
   ```
2. This will create an `out` directory with your static files

## Uploading to Hostinger
1. Log in to your Hostinger control panel
2. Navigate to File Manager
3. Go to public_html directory
4. Upload all contents from your local `out` directory
5. Ensure `.htaccess` file is present in the root directory

## Post-deployment Checklist
1. Verify that the `.htaccess` file is properly uploaded
2. Check that `index.html` is in the root directory
3. Test the following URLs work:
   - Homepage (/)
   - About (/about/)
   - Services (/services/)
   - Contact (/contact/)
   - Any dynamic routes
4. Test navigation between pages
5. Verify that images and assets load correctly
6. Check that forms and interactive elements work

## Hostinger Settings
1. Domain Settings:
   - Verify domain points to correct directory
   - Check SSL certificate is active
   - Ensure www/non-www redirect is configured

2. Apache Settings:
   - mod_rewrite should be enabled
   - Check error logs if issues occur

## Troubleshooting
If you encounter 404 errors:
1. Verify `.htaccess` file is present and has correct permissions (644)
2. Check that all files were uploaded successfully
3. Clear browser cache and Hostinger's cache
4. Test in incognito/private browsing mode

## Support
If issues persist:
1. Contact Hostinger support
2. Provide them with:
   - Your domain name
   - Specific error messages
   - Steps to reproduce the issue 