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
    //first.
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("m-title");
    menuTitle.classList.add("border");

    const title = document.createElement("div");
    title.classList.add("mL");
    title.textContent = "Menu";
    menuTitle.appendChild(title);

    container.appendChild(menuTitle);

    //second 
    const aTitle = document.createElement("div");
    aTitle.classList.add("a-title");
    aTitle.classList.add("border");

    const al = document.createElement("div");
    al.classList.add("aL");
    al.textContent = "Appetizers"
    aTitle.appendChild(al);

    container.appendChild(aTitle);

    //third
    const appetizers = document.createElement("div");
    appetizers.classList.add("appetizers");
    appetizers.classList.add("border");

    const cl = ["a1","a2","a3","a4"];

    for (let i = 0; i < cl.length; i++){
        const d1 = document.createElement("div");
        d1.classList.add("appe");
        d1.classList.add(cl[i]);

        appetizers.appendChild(d1);
    }

    container.appendChild(appetizers);

    //fourth

    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.classList.add("border");

    const m = document.createElement("div");
    m.classList.add("m");
    m.textContent = "Main Course";
    mainTitle.appendChild(m);

    container.appendChild(mainTitle);

    const mainCourse = document.createElement("div");
    mainCourse.classList.add("main-course");
    mainCourse.classList.add("border");

    for (let i = 0; i < 2; i++){
        const d2 = document.createElement("div");
        d2.classList.add("main");
        i == 0? d2.classList.add("steak"): d2.classList.add("pasta");

        mainCourse.appendChild(d2);
    }

    container.appendChild(mainCourse);

    //fifth
    const dTitle = document.createElement("div");
    dTitle.classList.add("d-title");
    dTitle.classList.add("border");

    const deTitle = document.createElement("div");
    deTitle.classList.add("ad");
    deTitle.textContent = "Desserts";
    dTitle.appendChild(deTitle);

    container.appendChild(dTitle);

    const dessert = document.createElement("div");
    dessert.classList.add("dessert");
    dTitle.classList.add("border");

    const d = ["cake","ice","pana","moch"];
    for(let i = 0; i < 4; i++){
        const des = document.createElement("div");
        des.classList.add("des");
        des.classList.add(d[i]);

        dessert.appendChild(des);
    }
    container.appendChild(dessert);
}
export const createContact = () => {
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    const profile = document.createElement("div");
    profile.classList.add("profiles");
    container.appendChild(profile);

    const details = [{
                        Title: "Head Chef",
                        Name: "John Legend",
                        Num: "+63 923959383",
                    },
                    {
                        Title: "Assistant Chef",
                        Name: "Not John Legend",
                        Num: "+63 123421323",
                    }
    
    ];
    const chefs = document.createElement("div");
        chefs.classList.add("chefs");
        profile.appendChild(chefs);
    for (let i = 0; i < 2; i++){

        const chef = document.createElement("div");
        chef.classList.add("chef");
        chefs.appendChild(chef);

        const tit = document.createElement("div");
        tit.classList.add("tit");
        chef.appendChild(tit);

        const cT = document.createElement("div");
        cT.classList.add("c-t");
        cT.textContent = details[i].Title;
        tit.appendChild(cT);

        const pic = document.createElement("div");
        pic.classList.add("pic");
        chef.appendChild(pic);

        const con = document.createElement("div");
        con.classList.add("con");
        chef.appendChild(con);

        const nam = document.createElement("div");
        nam.classList.add("nam");
        con.appendChild(nam);

        const num = document.createElement("div");
        num.classList.add("num");
        con.appendChild(num);

        const sNam = document.createElement("span");
        sNam.textContent = details[i].Name;
        nam.appendChild(sNam);

        const xNam = document.createElement("span");
        xNam.textContent = details[i].Num;
        num.appendChild(xNam);
    }

    //house
    const house = document.createElement("div");
    house.classList.add("house");
    container.appendChild(house);

    const details1 = [{
                        Span: "General Inquies",
                        Resto: "Restaurant's Hotline:",
                        RestoH: "26-3434-450",
                        Man : "Manager's Contact:",
                        ManC: "+63 2344423424"
                        },

                        {
                            Span: "Reservation Inquiry",
                            Num: "+666 666 999 666"
                        }
    ]
    for(let i = 0; i < 2; i++){
        const inquiry = document.createElement("div");
        inquiry.classList.add("inquiry");
        house.appendChild(inquiry);

        const inContain = document.createElement("div");
        inContain.classList.add("in-container");
        inquiry.appendChild(inContain);

        const iTitle = document.createElement("div");
        iTitle.classList.add("i-title");
        inContain.appendChild(iTitle);

        const iContent = document.createElement("div");
        iContent.classList.add("i-content");
        inContain.appendChild(iContent);

        if (i == 1){
            const span = document.createElement("span");
            span.textContent = details1[i].Span;
            iTitle.appendChild(span);

            const div = document.createElement("div");
            iContent.appendChild(div);
            
            const p = document.createElement("p");
            p.textContent = details1[i].Num;
            div.appendChild(p);
        }
        else{
            const span = document.createElement("span");
            span.textContent = details1[i].Span;
            iTitle.appendChild(span);
            
            const hNum = document.createElement("div");
            hNum.classList.add("h-num");
            iContent.appendChild(hNum);

            const div = document.createElement("div");
            hNum.appendChild(div);

            const p1 = document.createElement("p");
            p1.textContent = details1[i].Resto;
            div.appendChild(p1);

            const p2 = document.createElement("p");
            p2.textContent = details1[i].RestoH;
            div.appendChild(p2);
            
            const mNum = document.createElement("div");
            mNum.classList.add("man-num");
            iContent.appendChild(mNum);

            const div5 = document.createElement("div");
            mNum.appendChild(div5);

            const p3 = document.createElement("p");
            p3.textContent = details1[i].Man;
            div5.appendChild(p3);

            const p4 = document.createElement("p");
            p4.textContent = details1[i].ManC;
            div5.appendChild(p4);
        }
    }
}