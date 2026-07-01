# Deployment Guide

This website is static, so it can be deployed to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or almost any web host.

## 1. Buy a domain name

Popular domain registrars include Namecheap, Google Domains/Squarespace Domains, GoDaddy, Porkbun, and Cloudflare Registrar.

Choose a domain that is easy to spell and professional. Good options for a portfolio include:

- ryamibrar.com
- ryamibrardesign.com
- ryam.design

## 2. Deploy to Netlify

1. Create a Netlify account.
2. Drag the `ryam-portfolio-site` folder into Netlify’s deploy area, or connect a GitHub repository.
3. Netlify will publish the site and give you a temporary URL.
4. Go to Site settings → Domain management.
5. Add your custom domain.
6. Follow Netlify’s DNS instructions.
7. Enable HTTPS if it is not already enabled automatically.

## 3. Deploy to Vercel

1. Create a Vercel account.
2. Upload or import the project from GitHub.
3. Keep the framework setting as “Other” if using this static version.
4. Deploy the site.
5. Go to Project Settings → Domains.
6. Add your custom domain.
7. Update DNS records at your domain registrar.
8. Vercel will automatically enable HTTPS once DNS resolves.

## 4. Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Go to Settings → Pages.
4. Choose the main branch and root folder.
5. Save and wait for GitHub Pages to publish.
6. Add a `CNAME` file containing your custom domain if you want to connect a domain.
7. Update DNS records at your domain registrar.
8. Enable “Enforce HTTPS” when available.

## 5. Deploy to Cloudflare Pages

1. Create a Cloudflare account.
2. Create a new Pages project.
3. Connect your GitHub repository or upload the project.
4. Use no build command for this static site.
5. Deploy.
6. Go to Custom domains.
7. Add your domain and follow Cloudflare’s DNS instructions.
8. HTTPS is usually handled automatically.

## 6. DNS basics

Your host will usually ask you to add one of these records:

- `A` records pointing to the host’s IP address
- `CNAME` record pointing to the host’s provided domain
- Nameserver changes if using the hosting provider’s DNS

DNS changes can take minutes to 48 hours, but they often work much sooner.

## 7. Final launch checklist

Before sharing the site:

- Test desktop, tablet, and phone layouts.
- Check every case study link.
- Check the resume download link.
- Replace placeholders with approved visuals.
- Make sure no confidential company details are visible.
- Add your real LinkedIn URL.
- Add final meta description and Open Graph preview image.
- Test contact form behavior.
- Check that HTTPS is active.
