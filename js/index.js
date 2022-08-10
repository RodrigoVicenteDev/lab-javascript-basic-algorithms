// Iteration 1: Names and Input
//

let hacker1 = "Ana"
console.log(`The driver's name is: ${hacker1}`)
let hacker2 = "zeus"
console.log(`The navigator name is: ${hacker2}`)
// Iteration 2: Conditionals

    if(hacker1.length > hacker2.length){
        console.log(` it has ${hacker1.length} characters!`)
    }
    if(hacker1.length < hacker2.length){
        console.log(`it has ${hacker2.length} characters!`)
    }

    if(hacker1.length == hacker2.length){
        console.log(`it has ${hacker2.length} characters!`)
    }



// Iteration 3: Loops

    let driver = hacker1.toUpperCase().split('')
    for (i in driver){
        driver.splice(1+[i]*2,0, ' ')
        }

    driver =  driver.join("")
    console.log(driver)


    let navigator = hacker2.split('')
    let navigator2 = []
    for(i = navigator.length -1; i > -1; i-- ){
        navigator2.push(navigator[i])
       
    }
    navigator2 = navigator2.join('')
    console.log(navigator2)


    let agrupados = []

    agrupados.push(hacker1 , hacker2)

    agrupados.sort()

    if (hacker1 === agrupados[0]){
        console.log("The driver's name goes first")
    }
    if (hacker2 === agrupados[0]){
        console.log("Yo, the navigator goes first definitely.")
    }

    if(hacker1 === hacker2){
        console.log('What?! You both have the same name?')
    }

  
    /*============================================================================================================
    */

    let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit porttitor augue, at scelerisque nibh congue non. Phasellus at sapien ullamcorper, tempus neque a, placerat dolor. Suspendisse consectetur lorem sit amet augue lacinia sagittis. Suspendisse potenti. Quisque nec tempor augue. Nam vel elementum lacus, id iaculis ante. Nulla lectus nulla, tincidunt et justo quis, consequat consequat sapien. Morbi massa neque, pellentesque id fringilla ut, sodales tempor urna.

    Sed at diam lorem. Ut at purus sed ligula gravida rhoncus. Praesent eu ex nec risus ornare porta ac ac ante. Suspendisse sit amet purus dignissim, molestie magna ac, ultricies sapien. Ut maximus eu lorem quis pulvinar. Aliquam pharetra sed ex a consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eu urna condimentum, accumsan quam et, mollis massa. Ut ultricies et felis ac rutrum. Duis dignissim vitae nibh sit amet fringilla. Suspendisse sollicitudin blandit mattis. Duis a consequat turpis. Fusce vitae commodo mauris. Phasellus erat lacus, eleifend sit amet nibh sit amet, rhoncus lobortis est.
    
    Pellentesque eu elit et diam malesuada mattis. Nullam quis libero velit. In bibendum enim egestas risus vulputate rutrum. Mauris eu varius ligula, ut viverra nunc. Nullam eget massa aliquam, lacinia erat ut, euismod enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce et consectetur augue. Aenean pellentesque odio in lectus fermentum facilisis. Donec rhoncus bibendum ipsum, eu viverra tellus condimentum id. Ut euismod, justo et tristique ullamcorper, ante ante sagittis urna, vel ultrices lorem quam id eros. Mauris condimentum risus est, sed pellentesque purus accumsan vitae. Nulla fringilla erat ut sapien pellentesque, vitae ultricies ex semper.`


    lorem = lorem.split(' ')

    console.log(lorem.length)
    let contador = 0
    for(i of lorem){
        if (i === 'et'){
            contador ++
        }
    }

    
    console.log(contador)

    
   