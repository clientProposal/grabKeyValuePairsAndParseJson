__Showcase__

https://showcase.apryse.com/key-value-extraction

1. Upload the pre-OCR-ed doc docsUsed/docReceivedFromClient.pdf, then extract its key value pairs. Open the modal with the JSON. 
2. Open the inspector, then the console.
3. Run the following code and copy its output:

```javascript
const els = Array.from(document.querySelector("#open-in-dialog > div > span > code").childNodes);

let cd = "";

els.forEach(el => cd += el.textContent );

cd // run cd to get back the json, then copy it
```

4. Save the JSON to a file with a json extension @ /outputFromShowcase/
5. Use the title of the file as an argument while running index.js, 

e.g. node index.js docReceivedFromClient

It will produce a new file with the same name at /outputFromCode/, but parsed to more closely approximate your desired result