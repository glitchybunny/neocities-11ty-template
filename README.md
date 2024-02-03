# Neocities 11ty Template

I've been making a lot of different neocities pages lately, and I find myself rebuilding them from scratch with Eleventy each time, so I made this template repository to save some work.

## Preface

This project uses the static site generator Eleventy, so if you're using it for the first time you might wanna have a look at the [11ty Getting Started](https://www.11ty.dev/docs/getting-started/) guide and their documentation.

I've configured this repo so you should make all your changes to the site within the `/src` directory. Your generated site will be output to `/www`. DO NOT under any circumstances edit this manually, as your changes will be lost when the site is regenerated!

Also, if you want to use the `upload` functionality, ensure you have the Neocities CLI installed.

## Usage

1. Run `npm install` to install all the packages required for the project
2. Work on your site in the `/src` directory with 11ty and whatever other tools you'd like to use. Your site will be compiled into the `/www` folder
3. Run the `dev` script found in `package.json` to create a local development environment to test your website. This will allow you to see changes happening in real-time, most likely at `http://localhost:8081/`
4. Once you're happy with how your site looks and you're ready to upload:
   1. Terminate `dev`
   2. Run `build` to generate a nice fresh `/www` directory
   3. Run `upload` and enter your site credentials, wait for everything to upload, and bwam!! Your beautiful webpage is alive <3

## FAQ

**Q. Why have you configured things in &lsqb;specific way&rsqb;?**

A. This repo is mainly for my own usage. If you've got any suggestions to make, I'm happy to accept pull requests, otherwise you can fork and modify the template for your own needs! :&rpar;

**Q. What about integrating Tailwind or another CSS library?**

A. Check out this branch where I've done exactly that https://github.com/glitchybunny/neocities-11ty-template/tree/tailwind

**Q. Why are the credentials wiped every time in the upload script?**

A. The Neocities CLI doesn't allow multiple different site logins at the moment. This is to prevent accidentally uploading your work to the wrong neocities site if you have more than one.
