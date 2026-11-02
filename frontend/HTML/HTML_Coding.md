# 1.Create a semantic HTML structure for a landing page.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
</head>
<body>
    <header>
        <nav>
            <h2>My website </h2>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <section id="home">
            <h1>Welcome to my website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis saepe aperiam iure incidunt eius unde inventore, quis delectus. Pariatur!</p>
            <a href="#contact"><button>Get Started</button></a>
        </section>
        <section id="about">
            <h2>
                ABout us
            </h2>
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus natus nemo quo a sunt quas ducimus autem nesciunt facilis. Veniam, animi at. Nam impedit commodi a illum eos laboriosam!
            </p>
        </section>
        <section id="services">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, dolores ipsa, dolore perspiciatis, ab aperiam voluptatum quos tenetur velit sunt iste reprehenderit. Nesciunt sint recusandae provident, ea quae impedit obcaecati?</p>
        </section>
        <section id="contact">
            <h2>Contactus</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vero facilis, maxime fugit, blanditiis perferendis dicta, distinctio minima ullam voluptatem libero eos earum. Magni impedit repudiandae sapiente nulla dignissimos animi?</p>
        </section>
        
    </main>
    <footer>
        <p>Copyright 2026</p>
    </footer>
    
</body>
</html>
```



# 2.Create a registration form with name, email, and password fields.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Registration Form</h1>
    <form action="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Name " required> <br><br>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" placeholder="Enter Email" required> <br><br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter Password" >
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

# 3.Create a table displaying employee information.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Employee Details</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01</td>
                <td>Jina</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Nini</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

# 4.Create a navigation bar with links.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nav Links</title>
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <h2>Mt website</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

# 5.Create a contact form with proper labels and validation.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="">
        <label for="name">Name :</label>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" required>
        <br><br>
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="Enter Email" required>
        <br><br>
        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" placeholder="Enter PhoneNumber" required>
        <br><br>
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5"required></textarea>
        <br><br>
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```


# 6.Create an accessible button and dropdown.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Element</title>
</head>
<body>
    <h2>Select Your Course</h2>
    <label for="course">Choose a course : </label>
    <select name="course" id="course" required>
        <option value="">Select Course</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </select>
    <br><br>
    <button type="button" aria-label="Submit course selection">Submit</button>
</body>
</html>
```


# 7.Build a simple FAQ section using HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Section</title>
</head>
<body>
    <h1>FAQ Section</h1>

    <details>
        <summary>WHat is HTML?</summary>
        <p>HTML stands for hyper text mark of language</p>
    </details>

    <details>
        <summary>What is CSS</summary>
        <p>CSS stands for cascading style sheet</p>
    </details>
</body>
</html>
```

# 8.Create a webpage with header, main, sidebar, and footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Layout</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
    </header>

    <main>
        <section>
            <h2>Main Content</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, amet!</p>
        </section>
        <aside>
            <h3>Aside Content</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, atque.</p>
        </aside>
    </main>

    <footer>
        <p>Copyright 2026</p>
    </footer>
</body>
</html>
```
