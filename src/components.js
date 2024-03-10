export const createHomePage = () =>  {
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    //header1
    const h1 = document.createElement("div");
    h1.classList.add("h-1");
    container.appendChild(h1);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "My Restaurant Page";
    h1.appendChild(title);

    //header2
    const h2 = document.createElement("div");
    h2.classList.add("h-2")
    container.appendChild(h2);

    const mainC = document.createElement("div");
    mainC.classList.add("main-c");
    h2.appendChild(mainC);

    const c1 = document.createElement("div");
    c1.classList.add("c-1");
    mainC.appendChild(c1);

    const p1 = document.createElement("p");
    p1.textContent = "Nestled in Cebu's vibrant culinary scene, our restaurant shines as a beacon of excellence, renowned for its fusion of flavors, impeccable service, and inviting ambiance. With dishes crafted with passion and precision, we're honored to be one of Cebu's premier dining destinations, where each meal is a celebration of gastronomy.";
    c1.appendChild(p1);

    const p2 = document.createElement("p");
    p2.classList.add("auth");
    p2.textContent = "-Cebu's Top 10";
    c1.appendChild(p2);

    //header 3
    const h3 = document.createElement("div");
    h3.classList.add("h-3");
    container.appendChild(h3);

    const gc = document.createElement("div");
    gc.classList.add("g-c");
    h3.appendChild(gc);

    const days = [  {day: "Monday",
                    open: "10-00 AM",
                    close: "10:00 PM,"},

                    {day: "Tuesday",
                    open: "10-00 AM",
                    close: "10:00 PM,"},

                    {day: "Wednesday",
                    open: "10-00 AM",
                    close: "10:00 PM,"},

                    {day: "Thursday",
                    open: "10-00 AM",
                    close: "10:00 PM,"},

                    {day: "Friday",
                    open: "10-00 AM",
                    close: "10:00 PM,"},

                    {day: "Saturday",
                    open: "8-00 AM",
                    close: "11:00 PM,"},
                    {day: "Sunday",
                    open: "Closed"
                    },
                ]
    for (let i = 0; i < 7; i++){
        const open1 = days[i].open;
        const close1 = days[i].close;
        const day = days[i].day;

        const d = document.createElement("div");
        if(day == "Sunday") d.classList.add("sunday");

        const p1 = document.createElement("p");
        p1.classList.add("day");
        p1.textContent = day;
        d.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = open1;
        d.appendChild(p2);

        const p3 = document.createElement("p");
        p3.textContent = close1;
        d.appendChild(p3);

        gc.appendChild(d);
    }

    //header4
    const h4 = document.createElement("div");
    h4.classList.add("h-4");
    container.appendChild(h4);
    
    const d4 = document.createElement("div");
    d4.classList.add("address");
    h4.appendChild(d4);

    const d1 = document.createElement("div");
    d4.appendChild(d1);

    const p = document.createElement("p");
    p.textContent = "Address";

    const pp = document.createElement("p");
    pp.textContent = "666 St. Sanciangko St. Cebu City";

    d1.appendChild(p);
    d1.appendChild(pp);
}
export const createMenu = () => {
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}
export const createContact = () => {
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}