# Next.js Blog

This is a simple blog built using Next.js, a popular React framework for building fast and efficient web applications.

## Features

- **Static Site Generation (SSG):** This blog is built using Next.js's SSG, which means that the pages are pre-rendered at build time, making your blog load quickly and improving SEO.

- **Dynamic Content:** You can easily add new blog posts by creating Markdown files in the `posts/blog` directory. The blog posts will be automatically generated and added to your blog.

- **Customization:** You can customize the appearance and layout of your blog by modifying the components in the `components` directory and the styles in the `styles` directory.

- **Responsive Design:** This blog is designed to be responsive and work well on various screen sizes, including desktops, tablets, and mobile devices.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-nextjs-blog.git
   ```

2. **Install Dependencies:**

   ```bash
   cd blog
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Your blog should now be running locally at `http://localhost:3000`.

   Feel free to customize the blog's appearance and layout by modifying the components in the `components` directory and the styles in the `styles` directory.

4. **Build for Production:**

   When you're ready to deploy your blog, build it for production:

   ```bash
   npm run build
   ```

   You can then deploy the contents of the `out` directory to your hosting platform of choice.

## Technologies Used

- Next.js
- React
- MongoDb
- Markdown for content
- CSS (with styled-components)
