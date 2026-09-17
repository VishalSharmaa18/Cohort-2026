const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    const routes = {
        1: {
            id: 1,
            name: "Dadar - Andheri Express",
            direction: "north"
        },
         2: {
            id: 2,
            name: "Bandra-Kurla Shuttle",
            direction: "East"
        }
    }

    let nextId = 3;

    //list all trains
    app.get('/routes',(req,res)=>{
        res.json(Object.values(routes))
    })
    
    //single rute by id
    app.get('/routes/:id',(req,res)=>{
        const {id} = req.params;
        const route = routes[id]
        // const route = routes[req.params.id]
        if(!route) return res.status(404).json({error: "No train on this id"})
            res.json(route)
    })

    //Add new route
    app.post('/routes',(req,res)=>{
        //no validation //no zod
        const newRoute = {id: nextId++, ...req.body};
        routes[newRoute.id] = newRoute
        res.status(201).json(newRoute)
    })

    //put
    app.put('/routes:/id',(req,res)=>{
        const id = req.params.id;
        if(!routes[id]) return res.status(404).json({error: "Yeh nahi bhjna hota hai"});
        routes[id] = {id: Number, ...req.body}
    })

    //patch
    app.patch('/routes:/id',(req,res)=>{
        const id = req.params.id;
        if(!routes[id]) return res.status(404).json({error: "Yeh nahi bhjna hota hai"});
        routes[id] = {id: Number, ...req.body}
        res.json(routes[id])
    })


    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      console.log(server);

      try {
        //TODO
        const res = await fetch(`${base}/routes`);
        const data = await res.json();
        console.log(`GET /routes`, JSON.stringify(data));

        const res2 = await fetch(`${base}/routes/1`);
        const data2 = await res2.json();
        console.log(`GET /routes/1`, JSON.stringify(data2));

        console.log("+++++++++++++++++++++++++++");

          const res3 = await fetch(`${base}/routes`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Vasai - Virar Local",
                direction: "West"
            })
        })
        const data3 = await res3.json();
        console.log(`POST /routes`, JSON.stringify(data3));

        const res4 = await fetch(`${base}/routes/3`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },  
            body: JSON.stringify({
                name: "Vasai - Virar Local",
                direction: "West"
            })
        })
          const res5 = await fetch(`${base}/routes/3`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                direction: "North"
            })
        })
      } catch (error) {}
      server.close(() => {
        console.log("Block 1 served...");
        resolve();
      });
    });
  });
}

async function main() {
  await block_1_httpMethods();
  process.exit(0);
}

main();
