

Main overview of the technologies used on our page:

NOTE: For the website to work properly, we placed it on an external domain. It can be viewed at davidbakke.no. The reason for this is that the XML document couldn't be read by javascript locally without setting local links. 

XML: We've used XML to represent the information about our products.
We decided to use XML and javascript to display the products instead of making separate webpages for each product. When you go into the linear productview, all products are added dynamically, so if you add a new product to the xml, it will automatically be added to the productspage. 

CSS: Used to style the HTML. We have used several css sheets to separate the files, to make it more orderly. We have used CSS in such a way that all pages have the same theme, and you get an impression of a simple, clean design. 

HTML: The skeleton of our webpage. We have used some of the new technology HTML5 has to offer; form validating, and canvas.

Validating forms: Used "required" on the "Contact us"-form, both Name and Email is required to press the submit-button. Also used the email-type, so the email-input from the user has to be on the form: "something@somthing" or "some@some.com".

Javascript: Javascript is being used to make the dropdown-menu from the navigationbar. It's also being used to make the canvas at the "About"-page. We have used Javascript to check the date and to display the correct daily offer. Lastly it's being used to read the XML-file, and view it in the correct containers. The script files has been separated some, to make it more readable, and to make it tidy when going through the files. We also used Javascript for sorting products after category.



Techniques used througout the whole website:

CSS: 
The pages uses a maincontainer to hold all the elements. The reason for this is to not use the whole page, but only a percentage of it. All elements used on the page is added as a child of this container. 

ProductLinks: The links to the products uses a paremeter in the url. It uses the index of where the product is in the xml document list. starting at 0, and ends at the last product. 

Javascript on dropdown menu: The dropdown menu uses javascript and css to work properly. The dropdown dropdown is hidden until you hover over the parent. When it is hovered over the javascript changes the css for the hidden menu so that it is viewed. There is functions to secure that if you hover out of the root, and into the submenu, it will still be shown, and not be closed right away. 


Techniques used on a specific webpage:

* Sitemap.html
We’re using relative link paths to link to the different sites on our webpage. Also using lists to display the site map.

* Contact.html
We’re using a form to let a customer send us a question. All of the fields in the form are required, so that the form can’t be submitted with out being filled out. We’ve also used the email-type to make sure that the email that is being submitted is a real email.

* About.html
Here we’re using Canvas to display the members of the group (NOTE: the pictures are not actually the members of the group). In the Javascript that the Canvas uses, we’re using the drawImage()-function to “make” the images, and then we use setInterval to change between the different images.

* ourmascot.html We’re using the video-tag to display a video, and to make sure that the video is displayed in as many browsers as possible, we have six different movie formats. We’ve also added a little text, just in case the browser doesn’t support the video-tag or format.  

* faq.html
Just plain HTML, but we’ve used bold font to separate the question from the answers.

offers.html: We're using the Date() and getDay()-functions in Javascript, and then we check the day of the week to know what's the daily offer. We're using a button to connect the HTML and Javascript, so when the button is clicked, the daily offer is displayed.

* index.html

XML and javascript:
This is the mainpage. It shows all products that is in the xml document. It is dynamically adding the items from the XML document using javascript. Javascript loads all the items into a list, and makes a div with correct childnodes out of every element. 

CSS: The productelements uses the float property, such that the elements are aligned next to each other in a nice way. It also scales when the page is zoomed in or out.

* product.html

XML and javascript: 
This is the informationpage for each product. It shows the product with the index sent via the url. Javascript fetches the value, and uses it to get the right information. After the correct information is fetched, it updates the containers in the html with the information. 
When you press next item or previous item, the index is either increased, or decreased, and the containers is updated. 
CSS: The arrows and the productinformation is contained within a div.

* categories.html
To get into this page you have to go through the dropdown menu under products. 

XML and Javascript:
This page works the same way as the mainpage(index), with some modifications in the javascript. There is a parameter sent via the link called "cat". This is fetched with Javascript, and the value determines which products that is viewed. In the XML document, each item has been given a category. If the URL parameter matches the category of the product, it is placed in a list. This list is being iterated, and it is made productcontainers in the HTML document, just as in the mainpage.


