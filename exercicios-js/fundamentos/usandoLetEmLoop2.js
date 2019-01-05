const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// Agora ele tem memoria que vai ser o valor passado
// no casa ali e 2, 6 e 8
funcs[2]()
funcs[6]()
funcs[8]()
