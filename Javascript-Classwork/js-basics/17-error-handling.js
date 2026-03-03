function bootNavigation(mapLoaded){
    try{
        console.log(`Is navigation loaded: ${mapLoaded}`)
        if(!mapLoaded){
           throw new Error("Something went wrong")
        }
        return "NAV_OK"
    }

    catch(error){
        console.log(error)
        console.log(`Navigation failed: ${error.message}`)
    }
    finally{
        console.log("Navigation sequence completed")
    }
    }

    const status1 = bootNavigation(false)
    console.log(`Result is: ${status1}`)
