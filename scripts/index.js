// Append the product section to the main grid
innerHTML = `
<!--Product Section-->
<div class="product-div">
      <h1 class="ourservice">Web and Mobile App Development Services We Offer!</h1>
      <div class="product-container">
        <div class="product">
          <img class="mobile-app" src="images/mobile-app.svg" alt="Mobile App">
          <h1 class="app">Mobile App Development</h1>
          <h4>We develop secure and user-friendly native and cross-platform applications for iOS and Android that enhance user satisfaction. We work with you from ideation to launch to deliver top-notch apps tailored to your requirements.
          </h4>
        </div>
        <div class="product">
          <img class="web-app" src="images/web-app.svg" alt="Web App">
          <h1 class="app">Web App Development</h1>
          <h4>Our web app development team is highly experienced in building feature-rich and scalable web apps. We put your audience first and design web applications that offer a flawless experience at every touchpoint.
          </h4>
        </div>
        <div class="product">
          <img class="AI-app" src="images/AI App.svg" alt="AI App">
          <h1 class="app">AI App Development</h1>
          <h4>We build AI-powered web applications that enhance user engagement, automate processes, and drive real business results. Our team tailors every aspect of your app, from intuitive UI to smart algorithms, to support your goals.
          </h4>
        </div>
      </div>


      <div class="product-container">
        <div class="product">
          <img class="app-modernizing" src="images/app-modernizing.svg" alt="App Modernization">
          <h1 class="app">Application Modernization</h1>
          <h4>We modernize outdated web and mobile applications to live up to the expectations of your tech-savvy users. We revamp them into powerful tools with better performance, improved responsiveness, and a stellar user interface.
          </h4>
        </div>
        <div class="product">
          <img class="E-commerce-app" src="images/E-commerce-app.svg" alt="E-commerce App Development">
          <h1 class="app">E-commerce App Development</h1>
          <h4>We build e-commerce apps that serve as a single point where users can learn about you and buy products. From smart search functionality to fast checkout, we make sure your customers enjoy an immersive shopping experience.
          </h4>
        </div>
        <div class="product">
          <img class="interprise-app" src="images/interprise-app.svg" alt="Interprise App Development">
          <h1 class="app">Interprise App Development</h1>
          <h4>We create custom enterprise applications that streamline business operations, improve team collaboration, and integrate with your existing IT infrastructure. Our apps are designed to handle the demands of large organizations.
          </h4>
        </div>
      </div>


      <div class="product-container">
        <div class="product">
          <img class="on-demand-app" src="images/on-demand-app.svg" alt="On-demand App Development">
          <h1 class="app">On-demand App Development</h1>
          <h4>Our AI-powered on-demand apps make it easy for users to access your services. Whether ride-hailing or food delivery services, our apps help you reach more customers, gather actionable data, increase sales, and maximize profitability.
          </h4>
        </div>
        <div class="product">
          <img class="app-testing" src="images/app-testing.svg" alt="Application Testing">
          <h1 class="app">Application Testing</h1>
          <h4>We test your app against real-world scenarios, edge cases, and the tiniest interactions that shape user experience. Our team is well-versed in usability, functional, and performance testing to ensure your app is free of bugs and vulnerabilities.
          </h4>
        </div>
        <div class="product">
          <img class="app-integration" src="images/app-integration.svg" alt="Application Integration">
          <h1 class="app">Application Integration</h1>
          <h4>We help you integrate your web and mobile applications with third-party platforms, cloud systems, and internal software for smooth and secure data flow. This allows your entire IT ecosystem to function more efficiently and effectively.
          </h4>
        </div>
      </div>


      <div class="product-container">kjfaisfyu fs</div>
      <div class="product-container">kjfaisfyu fs</div>
    </div>`;
    document. querySelector(".main-grid").innerHTML += innerHTML;

    // Here we generate html for aboutUs page
    const aboutUsSection = document.querySelector(".about-us");
    aboutUsSection.addEventListener("click", () => {
        event.preventDefault(); // Prevent default link behavior
        let aboutUsHTML = `
        <div class="aboutus-div">
          <h1 class="aboutus-heading">About Us</h1>
          <p class="aboutus-paragraph">
            Welcome to Vijutech, your trusted partner in innovative web and mobile app development solutions. We are a team of passionate developers, designers, and strategists dedicated to transforming your ideas into cutting-edge digital experiences.
          </p>
          <p class="aboutus-paragraph">
            At Vijutech, we believe in the power of technology to drive business growth and enhance user engagement. Our mission is to deliver high-quality, scalable, and user-centric applications that meet the unique needs of our clients across various industries.
          </p>
          <p class="aboutus-paragraph">
            With a focus on collaboration and transparency, we work closely with our clients throughout the development process to ensure that every project is delivered on time and within budget. Our commitment to excellence and customer satisfaction sets us apart in the competitive tech landscape.
          </p>
          <p class="aboutus-paragraph">
          <h1 class="aboutus-heading">Our Vision</h1>
            <p>
            Taking the lead in bridging the gap of digital solution in Africa, and 
            To be a global leader in web and mobile app development, empowering businesses to thrive in the digital age through innovative technology solutions.
            <p>
        </div>`;
    document.querySelector(".main-grid").innerHTML = aboutUsHTML;
    });


    //................Our Blog page............
    const posts =  [
      {
        title: "How We Built Our First VTU Web App in ASP.NET Core",
        author: "Victor J.",
        date: "October 22, 2025",
        image: "images/ASP.NET-IMG.jfif",
        excerpt: "Learn how ViJuTech built its first VTU web app using ASP.NET Core and C#...",
        content: "Full blog content goes here..."
      },
      {
        title: "Top 7 Tools Every Nigerian Developer Should Know in 2025",
        author: "Victor J.",
        date: "October 18, 2025",
        image: "images/top-7-tools-for-developers.png",
        excerpt: "Explore powerful tools that help you code, deploy, and grow as a developer...",
        content: "Full article here..."
      }];

    const blogSection = document.querySelector(".blog-page");
    blogSection.addEventListener("click", () => {
      event.preventDefault(); // Prevent default link behavior
      document.createElement("div").className = "blog-div";
      let blogHTML = `<h1 class="blog-heading">Our Latest Blog Posts</h1>`;
      posts.forEach(post => {
        blogHTML += `
        <div class="blog-post">
          <img src="${post.image}" alt="${post.title}" class="blog-thumbnail">
          <h2 class="blog-title">${post.title}</h2>
          <p class="blog-meta"><strong>By:</strong> ${post.author} | ${post.date}</p>
          <p class="blog-excerpt">${post.excerpt}</p>
          <p class="blog-content" style="display:none;">${post.content}</p>
          <button class="read-more-btn">Read More</button>
        </div>`;
      });
      document.querySelector(".main-grid").innerHTML = blogHTML;
    });
// ..............End of Blog page............

//...................Career Page.............

const careerSection = document.querySelector('.career-page');
careerSection.addEventListener("click", () => {
  event.preventDefault();
  let careerHTML = `
  <p class="career-paragraph">Sorry! This Page is not yet available.</p>
  `;
document.querySelector(".main-grid").innerHTML = careerHTML;
});
//................End of Career Page.........

//...................Clients Page.............

const clientsSection = document.querySelector('.clients-page');
clientsSection.addEventListener("click", () => {
  event.preventDefault();
  let clientsHTML = `
  <p class="clients-paragraph">Sorry! This Page is not yet available.</p>
  `;
document.querySelector(".main-grid").innerHTML = clientsHTML;
});
//................End of Clients Page.........

//...................Service Page.............

const serviceSection = document.querySelector('.service-page');
serviceSection.addEventListener("click", () => {
  event.preventDefault();
  let serviceHTML = `
  <p class="service-paragraph">Sorry! This Page is not yet available.</p>
  `;
document.querySelector(".main-grid").innerHTML = serviceHTML;
});
//................End of Service Page.........