# Neocities 11ty Template

Since I've been making so many different neocities pages, and I find myself rebuilding them from scratch with Eleventy each time, I thought it might save some work to create a preconfigured template repository.

## Preface

This project uses the static site generator Eleventy, so if you're using it for the first time you might wanna have a look at the [11ty Getting Started](https://www.11ty.dev/docs/getting-started/) guide and their documentation.

CSS is generated with PostCSS and Tailwind, since those are my preferred libraries. They can be ignored if you'd rather do the stylesheets yourself.

I've configured this repo so you should make all your changes to the site within the `/src` directory. Your generated site will be output to `/www`. DO NOT under any circumstances edit this manually, as your changes will be lost when the site is regenerated!

Also, if you want to use the `upload` functionality, ensure you have the Neocities CLI installed.

## Usage

1. Run `npm install` to install all the packages required for the project
2. Build your site in the `/src` directory with 11ty and whatever other tools you'd like to use.
3. Run the `dev` and (optionally) `postcss` scripts found in `package.json` to create a local development environment to test your website. This will allow you to see changes happening in real-time, most likely at `http://localhost:8081/`.
4. Once you're happy with how your site looks and you're ready to upload:
   1. Terminate the `dev` and `postcss` scripts.
   2. Delete the current version of the `/www` folder, as this may contain build artifacts such as duplicate pages.
   3. Run the `build` script to generate a nice fresh `/www` directory
   4. Run the `upload` script and enter your site credentials, wait for everything to upload, and bwam!! Your beautiful webpage is alive <3

## FAQ

**Q. Why have you configured things in &lsqb;specific way&rsqb;?**

A. This repo is primarily for my own usage and I'm somewhat opinionated about code structure, project layouts, etc. I'm always open to feedback, and if you would like to modify the template for your own use, you're welcome to fork it and implement your own ideas :&rpar;

**Q. Why are the credentials wiped every time in the upload script?**

A. The Neocities CLI doesn't allow multiple different site logins, so this is to prevent accidentally uploading your work to the wrong site if you have multiple.
