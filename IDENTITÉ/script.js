// 
let strategy = document.querySelector(".strategy");
let visualIdentity = document.querySelector(".visualIdentity");

let main1 = document.querySelector(".main1");
let m1 = document.querySelector(".m1");

    let m1_1 = document.querySelector(".m1_1");
        let m1_1_table = document.querySelector(".m1_1_table");
    let m1_2 = document.querySelector(".m1_2");
        let m1_2_table = document.querySelector(".m1_2_table");
    let m1_3 = document.querySelector(".m1_3");
        let m1_3_table = document.querySelector(".m1_3_table");
    let m1_4 = document.querySelector(".m1_4");
        let m1_4_table = document.querySelector(".m1_4_table");

        main1.addEventListener("click", function(){
            strategy.classList.add("white");
            visualIdentity.classList.remove("white");
            m1.classList.toggle("hide");
            main1.classList.toggle("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");
            
        })
        m1_1.addEventListener("click", function(){
            m1_1_table.classList.toggle("hide");
            m1_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m1_2_table.classList.add("hide");
            m1_3_table.classList.add("hide");
            m1_4_table.classList.add("hide");

            m1_1.classList.toggle("white");
            m1_2.classList.remove("white");
            m1_3.classList.remove("white");
            m1_4.classList.remove("white");
        })
        m1_2.addEventListener("click", function(){
            m1_2_table.classList.toggle("hide");
            m1_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m1_1_table.classList.add("hide");
            m1_3_table.classList.add("hide");
            m1_4_table.classList.add("hide");

            m1_2.classList.toggle("white");
            m1_1.classList.remove("white");
            m1_3.classList.remove("white");
            m1_4.classList.remove("white");
        })
        m1_3.addEventListener("click", function(){
            m1_3_table.classList.toggle("hide");
            m1_3.scrollIntoView({behavior: 'smooth', block: 'start'});
            m1_2_table.classList.add("hide");
            m1_4_table.classList.add("hide");
            m1_1_table.classList.add("hide");

            m1_1.classList.remove("white");
            m1_2.classList.remove("white");
            m1_3.classList.toggle("white");
            m1_4.classList.remove("white");
        })
        m1_4.addEventListener("click", function(){
            m1_4_table.classList.toggle("hide");
            m1_4.scrollIntoView({behavior: 'smooth', block: 'start'});
            m1_2_table.classList.add("hide");
            m1_3_table.classList.add("hide");
            m1_1_table.classList.add("hide");

            
            m1_1.classList.remove("white");
            m1_2.classList.remove("white");
            m1_3.classList.remove("white");
            m1_4.classList.toggle("white");
        })

// M = 2 WHO WE ARE : 2-1 , 2-2 
let main2 = document.querySelector(".main2");
let m2 = document.querySelector(".m2");

    let m2_1 = document.querySelector(".m2_1");
        let m2_1_table = document.querySelector(".m2_1_table");
    let m2_2 = document.querySelector(".m2_2");
        let m2_2_table = document.querySelector(".m2_2_table");

        main2.addEventListener("click", function(){
            strategy.classList.add("white");
            visualIdentity.classList.remove("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.toggle("hide");
            main2.classList.toggle("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m2_1.addEventListener("click", function(){
            m2_1_table.classList.toggle("hide");
            m2_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m2_2_table.classList.add("hide");

            m2_1.classList.toggle("white");
            m2_2.classList.remove("white");
        })
        m2_2.addEventListener("click", function(){
            m2_1_table.classList.add("hide");
            m2_2_table.classList.toggle("hide");
            m2_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            
            m2_1.classList.remove("white");
            m2_2.classList.toggle("white");
        })

// M = 3 WHAT WE DO : 3-1 , 3-2 , 3-3 
let main3 = document.querySelector(".main3");
let m3 = document.querySelector(".m3");

    let m3_1 = document.querySelector(".m3_1");
        let m3_1_table = document.querySelector(".m3_1_table");
    let m3_2 = document.querySelector(".m3_2");
        let m3_2_table = document.querySelector(".m3_2_table");
    let m3_3 = document.querySelector(".m3_3");
        let m3_3_table = document.querySelector(".m3_3_table");

        main3.addEventListener("click", function(){
            strategy.classList.add("white");
            visualIdentity.classList.remove("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.toggle("hide");
            main3.classList.toggle("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m3_1.addEventListener("click", function(){
            m3_1_table.classList.toggle("hide");
            m3_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m3_2_table.classList.add("hide");
            m3_3_table.classList.add("hide");

            m3_1.classList.toggle("white");
            m3_2.classList.remove("white");
            m3_3.classList.remove("white");
        })
        m3_2.addEventListener("click", function(){
            m3_1_table.classList.add("hide");
            m3_2_table.classList.toggle("hide");
            m3_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m3_3_table.classList.add("hide");

            m3_1.classList.remove("white");
            m3_2.classList.toggle("white");
            m3_3.classList.remove("white");
        })
        m3_3.addEventListener("click", function(){
            m3_1_table.classList.add("hide");
            m3_2_table.classList.add("hide");
            m3_3_table.classList.toggle("hide");
            m3_3.scrollIntoView({behavior: 'smooth', block: 'start'});

            m3_1.classList.remove("white");
            m3_2.classList.remove("white");
            m3_3.classList.toggle("white");
        })

// M = 4 WHAT WE DO : 4-1 , 4-2 , 4-3 , 4-4 , 4-5 ,
let main4 = document.querySelector(".main4");
let m4 = document.querySelector(".m4");

    let m4_1 = document.querySelector(".m4_1");
        let m4_1_table = document.querySelector(".m4_1_table");
    let m4_2 = document.querySelector(".m4_2");
        let m4_2_table = document.querySelector(".m4_2_table");

            // 2-1
            let m4_2_1 = document.querySelector(".m4_2_1");
                // 2-1-SUB
                let m4_2_1_A = document.querySelector(".m4_2_1_A");
                    let m4_2_1_A_table = document.querySelector(".m4_2_1_A_table");
                let m4_2_1_B = document.querySelector(".m4_2_1_B");
                    let m4_2_1_B_table = document.querySelector(".m4_2_1_B_table");
                let m4_2_1_C = document.querySelector(".m4_2_1_C");
                    let m4_2_1_C_table = document.querySelector(".m4_2_1_C_table");
                let m4_2_1_D = document.querySelector(".m4_2_1_D");
                    let m4_2_1_D_table = document.querySelector(".m4_2_1_D_table");
            
            // 2-2
            let m4_2_2 = document.querySelector(".m4_2_2");
                // 2-2-SUB
                let m4_2_2_A = document.querySelector(".m4_2_2_A");
                    let m4_2_2_A_table = document.querySelector(".m4_2_2_A_table");
                let m4_2_2_B = document.querySelector(".m4_2_2_B");
                    let m4_2_2_B_table = document.querySelector(".m4_2_2_B_table");
                        // 2-2-SUB#
                        let m4_2_2_B1 = document.querySelector(".m4_2_2_B1");
                            let m4_2_2_B1_table = document.querySelector(".m4_2_2_B1_table");
                        let m4_2_2_B2 = document.querySelector(".m4_2_2_B2");
                            let m4_2_2_B2_table = document.querySelector(".m4_2_2_B2_table");
                        let m4_2_2_B3 = document.querySelector(".m4_2_2_B3");
                            let m4_2_2_B3_table = document.querySelector(".m4_2_2_B3_table");
                        let m4_2_2_B4 = document.querySelector(".m4_2_2_B4");
                            let m4_2_2_B4_table = document.querySelector(".m4_2_2_B4_table");
                let m4_2_2_C = document.querySelector(".m4_2_2_C");
                    let m4_2_2_C_table = document.querySelector(".m4_2_2_C_table");

            // 2-3
            let m4_2_3 = document.querySelector(".m4_2_3");
                // 2-3-SUB
                let m4_2_3_A = document.querySelector(".m4_2_3_A");
                    let m4_2_3_A_table = document.querySelector(".m4_2_3_A_table");
                let m4_2_3_B = document.querySelector(".m4_2_3_B");
                    let m4_2_3_B_table = document.querySelector(".m4_2_3_B_table");
                let m4_2_3_C = document.querySelector(".m4_2_3_C");
                    let m4_2_3_C_table = document.querySelector(".m4_2_3_C_table");


    let m4_3 = document.querySelector(".m4_3");
        let m4_3_table = document.querySelector(".m4_3_table");

        main4.addEventListener("click", function(){
            strategy.classList.add("white");
            visualIdentity.classList.remove("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.toggle("hide");
            main4.classList.toggle("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m4_1.addEventListener("click", function(){
            m4_1_table.classList.toggle("hide");
            m4_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m4_2_table.classList.add("hide");
            m4_3_table.classList.add("hide");

            m4_1.classList.toggle("white");
            m4_2.classList.remove("white");
            m4_3.classList.remove("white");
        })
        m4_2.addEventListener("click", function(){
            m4_2_table.classList.toggle("hide");
            m4_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m4_1_table.classList.add("hide");
            m4_3_table.classList.add("hide");

            m4_2.classList.toggle("white");
            m4_1.classList.remove("white");
            m4_3.classList.remove("white");
        })
            // 2-1
            m4_2_1.addEventListener("click", function(){
                m4_2_1.classList.toggle("white");

                m4_2_2.classList.remove("white");
                m4_2_3.classList.remove("white");

                m4_2_2_A.classList.add("hide");
                m4_2_2_B.classList.add("hide");
                
                m4_2_2_B1.classList.add("hide");
                m4_2_2_B2.classList.add("hide");
                m4_2_2_B3.classList.add("hide");
                m4_2_2_B4.classList.add("hide");

                m4_2_2_B_table.classList.add("hide");

                m4_2_2_B1_table.classList.add("hide");
                m4_2_2_B2_table.classList.add("hide");
                m4_2_2_B3_table.classList.add("hide");
                m4_2_2_B4_table.classList.add("hide");

                m4_2_2_C.classList.add("hide");

                m4_2_2_C_table.classList.add("hide");

                // close 2-3
                m4_2_3_A.classList.add("hide");
                m4_2_3_A_table.classList.add("hide");
                m4_2_3_B.classList.add("hide");
                m4_2_3_B_table.classList.add("hide");
                m4_2_3_C.classList.add("hide");
                m4_2_3_C_table.classList.add("hide");

                m4_2_1_A.classList.remove("hide");
                m4_2_1_B.classList.remove("hide");
                m4_2_1_C.classList.remove("hide");
                m4_2_1_D.classList.remove("hide"); 
                
                        
                       
                 
            })
                // 2-1-A
                m4_2_1_A.addEventListener("click", function(){
                    m4_2_1.classList.add("white");
                    m4_2_1_A.classList.remove("hide");
                    m4_2_1_A.classList.toggle("white");
                    m4_2_1_A_table.classList.toggle("hide");
                    m4_2_1_A.scrollIntoView({behavior: 'smooth', block: 'start'});

                    m4_2_1_B.classList.remove("hide");
                    m4_2_1_B_table.classList.add("hide");
                    m4_2_1_B.classList.remove("white");

                    m4_2_1_C.classList.remove("hide");
                    m4_2_1_C_table.classList.add("hide");
                    m4_2_1_C.classList.remove("white");

                    m4_2_1_D.classList.remove("hide");
                    m4_2_1_D_table.classList.add("hide");
                    m4_2_1_D.classList.remove("white");

                })

                  // 2-1-B
                  m4_2_1_B.addEventListener("click", function(){
                    m4_2_1.classList.add("white");
                    m4_2_1_B.classList.remove("hide");
                    m4_2_1_B.classList.toggle("white");
                    m4_2_1_B_table.classList.toggle("hide");
                    m4_2_1_B.scrollIntoView({behavior: 'smooth', inline: 'start', block: 'start'});

                    m4_2_1_A.classList.remove("hide");
                    m4_2_1_A_table.classList.add("hide");
                    m4_2_1_A.classList.remove("white");

                    m4_2_1_C.classList.remove("hide");
                    m4_2_1_C_table.classList.add("hide");
                    m4_2_1_C.classList.remove("white");

                    m4_2_1_D.classList.remove("hide");
                    m4_2_1_D_table.classList.add("hide");
                    m4_2_1_D.classList.remove("white");

                })
                   // 2-1-C
                   m4_2_1_C.addEventListener("click", function(){
                    m4_2_1.classList.add("white");
                    m4_2_1_C.classList.remove("hide");
                    m4_2_1_C.classList.toggle("white");
                    m4_2_1_C_table.classList.toggle("hide");
                    m4_2_1_C.scrollIntoView({behavior: 'smooth', block: 'start'});

                    m4_2_1_B.classList.remove("hide");
                    m4_2_1_B_table.classList.add("hide");
                    m4_2_1_B.classList.remove("white");

                    m4_2_1_A.classList.remove("hide");
                    m4_2_1_A_table.classList.add("hide");
                    m4_2_1_A.classList.remove("white");

                    m4_2_1_D.classList.remove("hide");
                    m4_2_1_D_table.classList.add("hide");
                    m4_2_1_D.classList.remove("white");

                })
                   // 2-1-D
                   m4_2_1_D.addEventListener("click", function(){
                    m4_2_1.classList.add("white");
                    m4_2_1_D.classList.remove("hide");
                    m4_2_1_D.classList.toggle("white");
                    m4_2_1_D_table.classList.toggle("hide");
                    m4_2_1_D.scrollIntoView({behavior: 'smooth', block: 'start'});

                    m4_2_1_A.classList.remove("hide");
                    m4_2_1_A.classList.remove("white");
                    m4_2_1_A_table.classList.add("hide");
                    
                    m4_2_1_C.classList.remove("hide");
                    m4_2_1_C_table.classList.add("hide");
                    m4_2_1_C.classList.remove("white");

                    m4_2_1_B.classList.remove("hide");
                    m4_2_1_B_table.classList.add("hide");
                    m4_2_1_B.classList.remove("white");

                })

             // 2-2
             m4_2_2.addEventListener("click", function(){
                m4_2_2.classList.toggle("white");

                m4_2_1.classList.remove("white");
                m4_2_3.classList.remove("white");
                
                    // close 2-1
                    m4_2_1_A.classList.add("hide");
                    m4_2_1_A_table.classList.add("hide");
                    m4_2_1_B.classList.add("hide");
                    m4_2_1_B_table.classList.add("hide");
                    m4_2_1_C.classList.add("hide");
                    m4_2_1_C_table.classList.add("hide");
                    m4_2_1_D.classList.add("hide");
                    m4_2_1_D_table.classList.add("hide");
                    // close 2-2
                    m4_2_2_A.classList.add("hide");
                    m4_2_2_A_table.classList.add("hide");
                    m4_2_2_B.classList.add("hide");
                    m4_2_2_B_table.classList.add("hide");
                    m4_2_2_C.classList.add("hide");
                    m4_2_2_C_table.classList.add("hide");
                    // close 2-3
                    m4_2_3_A.classList.add("hide");
                    m4_2_3_A_table.classList.add("hide");
                    m4_2_3_B.classList.add("hide");
                    m4_2_3_B_table.classList.add("hide");
                    m4_2_3_C.classList.add("hide");
                    m4_2_3_C_table.classList.add("hide");

                m4_2_2_A.classList.remove("hide");
                m4_2_2_B.classList.remove("hide");
                m4_2_2_C.classList.remove("hide"); 
                
                m4_2_2_A.classList.remove("white");
                m4_2_2_B.classList.remove("white");
                m4_2_2_C.classList.remove("white"); 
            })
                // 2-2-A
                m4_2_2_A.addEventListener("click", function(){
                    m4_2_2.classList.add("white");
                    m4_2_2_A.classList.remove("hide");
                    m4_2_2_A.classList.toggle("white");
                    m4_2_2_A_table.classList.toggle("hide");
                    m4_2_2_A.scrollIntoView({behavior: 'smooth', block: 'start'});

                        // close 2-1
                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");
                        // close 2-2

                        // close 2-3

                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");

                        m4_2_2_B1_table.classList.add("hide");
                        m4_2_2_B2_table.classList.add("hide");
                        m4_2_2_B3_table.classList.add("hide");
                        m4_2_2_B4_table.classList.add("hide");

                    m4_2_2_B.classList.remove("hide");
                    m4_2_2_B_table.classList.add("hide");
                    m4_2_2_B.classList.remove("white");

                    m4_2_2_C.classList.remove("hide");
                    m4_2_2_C_table.classList.add("hide");
                    m4_2_2_C.classList.remove("white");
                })
                // 2-2-B
                m4_2_2_B.addEventListener("click", function(){
                    m4_2_2.classList.add("white");
                    m4_2_2_B.classList.remove("hide");
                    m4_2_2_B.classList.toggle("white");
                    m4_2_2_B_table.classList.toggle("hide");
                    m4_2_2_B.scrollIntoView({behavior: 'smooth', block: 'start'});

                    m4_2_2_B1.classList.remove("hide");
                    m4_2_2_B2.classList.remove("hide");
                    m4_2_2_B3.classList.remove("hide");
                    m4_2_2_B4.classList.remove("hide");

                    m4_2_2_B1_table.classList.add("hide");
                    m4_2_2_B2_table.classList.add("hide");
                    m4_2_2_B3_table.classList.add("hide");
                    m4_2_2_B4_table.classList.add("hide");

                        // close 2-1
                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");

                    m4_2_2_A.classList.remove("hide");
                    m4_2_2_A_table.classList.add("hide");
                    m4_2_2_A.classList.remove("white");

                    m4_2_2_C.classList.remove("hide");
                    m4_2_2_C_table.classList.add("hide");
                    m4_2_2_C.classList.remove("white");
                })
                            // 2-2-B1
                            m4_2_2_B1.addEventListener("click", function(){
                                m4_2_2.classList.add("white");
                                m4_2_2_B1.classList.remove("hide");
                                m4_2_2_B1.classList.toggle("white");
                                m4_2_2_B1_table.classList.toggle("hide");
                                m4_2_2_B1.scrollIntoView({behavior: 'smooth', block: 'start'});

                                // CLOSE 2-2-B, 2-2-B2, 2-2-B3, 2-2-B4
                                m4_2_2_B_table.classList.add("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B3_table.classList.add("hide");
                                m4_2_2_B4_table.classList.add("hide");

                                m4_2_2_B2.classList.remove("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B2.classList.remove("white");

                                m4_2_2_B3.classList.remove("hide");
                                m4_2_2_B3_table.classList.add("hide");
                                m4_2_2_B3.classList.remove("white");

                                m4_2_2_B4.classList.remove("hide");
                                m4_2_2_B4_table.classList.add("hide");
                                m4_2_2_B4.classList.remove("white");
                            })

                             // 2-2-B2
                             m4_2_2_B2.addEventListener("click", function(){
                                m4_2_2.classList.add("white");
                                m4_2_2_B2.classList.remove("hide");
                                m4_2_2_B2.classList.toggle("white");
                                m4_2_2_B2_table.classList.toggle("hide");
                                m4_2_2_B2.scrollIntoView({behavior: 'smooth', block: 'start'});

                                // CLOSE 2-2-B, 2-2-B1, 2-2-B3, 2-2-B4
                                m4_2_2_B_table.classList.add("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B3_table.classList.add("hide");
                                m4_2_2_B4_table.classList.add("hide");

                                m4_2_2_B1.classList.remove("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B1.classList.remove("white");

                                m4_2_2_B3.classList.remove("hide");
                                m4_2_2_B3_table.classList.add("hide");
                                m4_2_2_B3.classList.remove("white");

                                m4_2_2_B4.classList.remove("hide");
                                m4_2_2_B4_table.classList.add("hide");
                                m4_2_2_B4.classList.remove("white");
                            })

                             // 2-2-B3
                             m4_2_2_B3.addEventListener("click", function(){
                                m4_2_2.classList.add("white");
                                m4_2_2_B3.classList.remove("hide");
                                m4_2_2_B3.classList.toggle("white");
                                m4_2_2_B3_table.classList.toggle("hide");
                                m4_2_2_B3.scrollIntoView({behavior: 'smooth', block: 'start'});

                                // CLOSE 2-2-B, 2-2-B1, 2-2-B2, 2-2-B4
                                m4_2_2_B_table.classList.add("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B4_table.classList.add("hide");

                                m4_2_2_B1.classList.remove("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B1.classList.remove("white");

                                m4_2_2_B2.classList.remove("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B2.classList.remove("white");

                                m4_2_2_B4.classList.remove("hide");
                                m4_2_2_B4_table.classList.add("hide");
                                m4_2_2_B4.classList.remove("white");
                            })

                            // 2-2-B4
                            m4_2_2_B4.addEventListener("click", function(){
                                m4_2_2.classList.add("white");
                                m4_2_2_B4.classList.remove("hide");
                                m4_2_2_B4.classList.toggle("white");
                                m4_2_2_B4_table.classList.toggle("hide");
                                m4_2_2_B4.scrollIntoView({behavior: 'smooth', block: 'start'});

                                // CLOSE 2-2-B, 2-2-B1, 2-2-B2, 2-2-B3
                                m4_2_2_B_table.classList.add("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B3_table.classList.add("hide");

                                m4_2_2_B1.classList.remove("hide");
                                m4_2_2_B1_table.classList.add("hide");
                                m4_2_2_B1.classList.remove("white");

                                m4_2_2_B2.classList.remove("hide");
                                m4_2_2_B2_table.classList.add("hide");
                                m4_2_2_B2.classList.remove("white");

                                m4_2_2_B3.classList.remove("hide");
                                m4_2_2_B3_table.classList.add("hide");
                                m4_2_2_B3.classList.remove("white");
                            })


                 // 2-2-C
                 m4_2_2_C.addEventListener("click", function(){
                    m4_2_2.classList.add("white");
                    m4_2_2_C.classList.remove("hide");
                    m4_2_2_C.classList.toggle("white");
                    m4_2_2_C_table.classList.toggle("hide");
                    m4_2_2_C.scrollIntoView({behavior: 'smooth', block: 'start'});

                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");


                    m4_2_2_A.classList.remove("hide");
                    m4_2_2_A_table.classList.add("hide");
                    m4_2_2_A.classList.remove("white");

                    m4_2_2_B.classList.remove("hide");
                    m4_2_2_B_table.classList.add("hide");
                        m4_2_2_B1_table.classList.add("hide");
                        m4_2_2_B2_table.classList.add("hide");
                        m4_2_2_B3_table.classList.add("hide");
                        m4_2_2_B4_table.classList.add("hide");
                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");

                    m4_2_2_B.classList.remove("white");
                })

                // 
                m4_2_3.addEventListener("click", function(){
                    m4_2_3.classList.toggle("white");
    
                    m4_2_1.classList.remove("white");
                    m4_2_2.classList.remove("white");
                    
                        // close 2-1
                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");
                        // close 2-2
                        m4_2_2_A.classList.add("hide");
                        m4_2_2_A_table.classList.add("hide");
                        m4_2_2_B.classList.add("hide");
                        m4_2_2_B_table.classList.add("hide");

                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B1_table.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B2_table.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B3_table.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");
                        m4_2_2_B4_table.classList.add("hide");

                        m4_2_2_C.classList.add("hide");
                        m4_2_2_C_table.classList.add("hide");
                        // close 2-3
    
                    m4_2_3_A.classList.remove("hide");
                    m4_2_3_B.classList.remove("hide");
                    m4_2_3_C.classList.remove("hide"); 
                    
                    m4_2_3_A.classList.remove("white");
                    m4_2_3_B.classList.remove("white");
                    m4_2_3_C.classList.remove("white"); 
                })

                // 2-3-A
                m4_2_3_A.addEventListener("click", function(){
                    m4_2_3.classList.add("white");
                    m4_2_3_A.classList.remove("hide");
                    m4_2_3_A.classList.toggle("white");
                    m4_2_3_A_table.classList.toggle("hide");
                    m4_2_3_A.scrollIntoView({behavior: 'smooth', block: 'start'});

                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");

                        m4_2_2_A.classList.add("hide");
                        m4_2_2_A_table.classList.add("hide");
                        m4_2_2_B.classList.add("hide");
                        m4_2_2_B_table.classList.add("hide");
                            m4_2_2_B1_table.classList.add("hide");
                            m4_2_2_B2_table.classList.add("hide");
                            m4_2_2_B3_table.classList.add("hide");
                            m4_2_2_B4_table.classList.add("hide");
                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");
                        m4_2_2_C.classList.add("hide");
                        m4_2_2_C_table.classList.add("hide");



                    m4_2_3_C.classList.remove("hide");
                    m4_2_3_C_table.classList.add("hide");
                    m4_2_3_C.classList.remove("white");

                    m4_2_3_B.classList.remove("hide");
                    m4_2_3_B_table.classList.add("hide");
                    m4_2_3_B.classList.remove("white");
                })

                 // 2-3-B
                 m4_2_3_B.addEventListener("click", function(){
                    m4_2_3.classList.add("white");
                    m4_2_3_B.classList.remove("hide");
                    m4_2_3_B.classList.toggle("white");
                    m4_2_3_B_table.classList.toggle("hide");
                    m4_2_3_B.scrollIntoView({behavior: 'smooth', block: 'start'});

                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");

                        m4_2_2_A.classList.add("hide");
                        m4_2_2_A_table.classList.add("hide");
                        m4_2_2_B.classList.add("hide");
                        m4_2_2_B_table.classList.add("hide");
                            m4_2_2_B1_table.classList.add("hide");
                            m4_2_2_B2_table.classList.add("hide");
                            m4_2_2_B3_table.classList.add("hide");
                            m4_2_2_B4_table.classList.add("hide");
                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");
                        m4_2_2_C.classList.add("hide");
                        m4_2_2_C_table.classList.add("hide");



                    m4_2_3_C.classList.remove("hide");
                    m4_2_3_C_table.classList.add("hide");
                    m4_2_3_C.classList.remove("white");

                    m4_2_3_A.classList.remove("hide");
                    m4_2_3_A_table.classList.add("hide");
                    m4_2_3_A.classList.remove("white");
                })

                // 2-3-C
                m4_2_3_C.addEventListener("click", function(){
                    m4_2_3.classList.add("white");
                    m4_2_3_C.classList.remove("hide");
                    m4_2_3_C.classList.toggle("white");
                    m4_2_3_C_table.classList.toggle("hide");
                    m4_2_3_C.scrollIntoView({behavior: 'smooth', block: 'start'});

                        m4_2_1_A.classList.add("hide");
                        m4_2_1_A_table.classList.add("hide");
                        m4_2_1_B.classList.add("hide");
                        m4_2_1_B_table.classList.add("hide");
                        m4_2_1_C.classList.add("hide");
                        m4_2_1_C_table.classList.add("hide");
                        m4_2_1_D.classList.add("hide");
                        m4_2_1_D_table.classList.add("hide");

                        m4_2_2_A.classList.add("hide");
                        m4_2_2_A_table.classList.add("hide");
                        m4_2_2_B.classList.add("hide");
                        m4_2_2_B_table.classList.add("hide");
                            m4_2_2_B1_table.classList.add("hide");
                            m4_2_2_B2_table.classList.add("hide");
                            m4_2_2_B3_table.classList.add("hide");
                            m4_2_2_B4_table.classList.add("hide");
                        m4_2_2_B1.classList.add("hide");
                        m4_2_2_B2.classList.add("hide");
                        m4_2_2_B3.classList.add("hide");
                        m4_2_2_B4.classList.add("hide");
                        m4_2_2_C.classList.add("hide");
                        m4_2_2_C_table.classList.add("hide");



                    m4_2_3_B.classList.remove("hide");
                    m4_2_3_B_table.classList.add("hide");
                    m4_2_3_B.classList.remove("white");

                    m4_2_3_A.classList.remove("hide");
                    m4_2_3_A_table.classList.add("hide");
                    m4_2_3_A.classList.remove("white");
                })



        m4_3.addEventListener("click", function(){
            m4_3_table.classList.toggle("hide");
            m4_3.classList.toggle("white");

            m4_2.classList.remove("white");
            m4_2_1.classList.remove("white");
            m4_2_2.classList.remove("white");
            m4_2_3.classList.remove("white");


            

            m4_1.classList.remove("white");
            m4_1_table.classList.add("hide");
            
            m4_2_1_A.classList.add("hide");
            m4_2_1_A_table.classList.add("hide");
            m4_2_1_B.classList.add("hide");
            m4_2_1_B_table.classList.add("hide");
            m4_2_1_C.classList.add("hide");
            m4_2_1_C_table.classList.add("hide");
            m4_2_1_D.classList.add("hide");
            m4_2_1_D_table.classList.add("hide");

            m4_2_2_A.classList.add("hide");
            m4_2_2_A_table.classList.add("hide");
            m4_2_2_B.classList.add("hide");
            m4_2_2_B_table.classList.add("hide");
                m4_2_2_B1_table.classList.add("hide");
                m4_2_2_B2_table.classList.add("hide");
                m4_2_2_B3_table.classList.add("hide");
                m4_2_2_B4_table.classList.add("hide");
            m4_2_2_B1.classList.add("hide");
            m4_2_2_B2.classList.add("hide");
            m4_2_2_B3.classList.add("hide");
            m4_2_2_B4.classList.add("hide");
            m4_2_2_C.classList.add("hide");
            m4_2_2_C_table.classList.add("hide");

            m4_2_3_A.classList.add("hide");
            m4_2_3_A_table.classList.add("hide");
            m4_2_3_B.classList.add("hide");
            m4_2_3_B_table.classList.add("hide");
            m4_2_3_C.classList.add("hide");
            m4_2_3_C_table.classList.add("hide");

        })

let main5 = document.querySelector(".main5");
let m5 = document.querySelector(".m5");

    let m5_1 = document.querySelector(".m5_1");
        let m5_1_table = document.querySelector(".m5_1_table");
  

        main5.addEventListener("click", function(){
            strategy.classList.add("white");
            visualIdentity.classList.remove("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.toggle("hide");
            main5.classList.toggle("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m5_1.addEventListener("click", function(){
            m5_1_table.classList.toggle("hide");
            m5_1.scrollIntoView({behavior: 'smooth', block: 'start'});
           
            m5_1.classList.toggle("white");
           
        })

let main6 = document.querySelector(".main6");
let m6 = document.querySelector(".m6");

    let m6_1 = document.querySelector(".m6_1");
        let m6_1_table = document.querySelector(".m6_1_table");
    let m6_2 = document.querySelector(".m6_2");
        let m6_2_table = document.querySelector(".m6_2_table");

        main6.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.toggle("hide");
            main6.classList.toggle("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m6_1.addEventListener("click", function(){
            m6_1_table.classList.toggle("hide");
            m6_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m6_2_table.classList.add("hide");
            m6_1.classList.toggle("white");
            m6_2.classList.add("white");
        })
        m6_2.addEventListener("click", function(){
            m6_1_table.classList.add("hide");
            m6_2_table.classList.toggle("hide");
            m6_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m6_1.classList.add("white");
            m6_2.classList.toggle("white");
        })

let main7 = document.querySelector(".main7");
let m7 = document.querySelector(".m7");

    let m7_1 = document.querySelector(".m7_1");
        let m7_1_table = document.querySelector(".m7_1_table");
    let m7_2 = document.querySelector(".m7_2");
        let m7_2_table = document.querySelector(".m7_2_table");

        main7.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.toggle("hide");
            main7.classList.toggle("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m7_1.addEventListener("click", function(){
            m7_1_table.classList.toggle("hide");
            m7_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m7_2_table.classList.add("hide");
            m7_1.classList.toggle("white");
            m7_2.classList.remove("white");
        })
        m7_2.addEventListener("click", function(){
            m7_1_table.classList.add("hide");
            m7_2_table.classList.toggle("hide");
            m7_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m7_1.classList.remove("white");
            m7_2.classList.toggle("white");
        })

let main8 = document.querySelector(".main8");
let m8 = document.querySelector(".m8");

    let m8_1 = document.querySelector(".m8_1");
        let m8_1_table = document.querySelector(".m8_1_table");
    let m8_2 = document.querySelector(".m8_2");
        let m8_2_table = document.querySelector(".m8_2_table");

        main8.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.toggle("hide");
            main8.classList.toggle("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m8_1.addEventListener("click", function(){
            m8_1_table.classList.toggle("hide");
            m8_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m8_2_table.classList.add("hide");
            m8_1.classList.toggle("white");
            m8_2.classList.remove("white");
        })
        m8_2.addEventListener("click", function(){
            m8_1_table.classList.add("hide");
            m8_2_table.classList.toggle("hide");
            m8_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m8_1.classList.remove("white");
            m8_2.classList.toggle("white");
        })

let main9 = document.querySelector(".main9");
let m9 = document.querySelector(".m9");

    let m9_1 = document.querySelector(".m9_1");
        let m9_1_table = document.querySelector(".m9_1_table");
    let m9_2 = document.querySelector(".m9_2");
        let m9_2_table = document.querySelector(".m9_2_table");
    let m9_3 = document.querySelector(".m9_3");
        let m9_3_table = document.querySelector(".m9_3_table");

        main9.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.toggle("hide");
            main9.classList.toggle("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m9_1.addEventListener("click", function(){
            m9_1_table.classList.toggle("hide");
            m9_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m9_2_table.classList.add("hide");
            m9_3_table.classList.add("hide");
            m9_1.classList.toggle("white");
            m9_2.classList.remove("white");
            m9_3.classList.remove("white");
        })
        m9_2.addEventListener("click", function(){
            m9_1_table.classList.add("hide");
            m9_2_table.classList.toggle("hide");
            m9_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m9_3_table.classList.add("hide");
            m9_1.classList.remove("white");
            m9_2.classList.toggle("white");
            m9_3.classList.remove("white");
        })
        m9_3.addEventListener("click", function(){
            m9_1_table.classList.add("hide");
            m9_2_table.classList.add("hide");
            m9_3_table.classList.toggle("hide");
            m9_3.scrollIntoView({behavior: 'smooth', block: 'start'});
            m9_1.classList.remove("white");
            m9_2.classList.remove("white");
            m9_3.classList.toggle("white");
        })

// let main10 = document.querySelector(".main10");
// let m10 = document.querySelector(".m10");

// let main11 = document.querySelector(".main11");
// let m11 = document.querySelector(".m11");

// let main12 = document.querySelector(".main12");
// let m12 = document.querySelector(".m12");

//     let m12_1 = document.querySelector(".m12_1");
//         let m12_1_table = document.querySelector(".m12_1_table");
//     let m12_2 = document.querySelector(".m12_2");
//         let m12_2_table = document.querySelector(".m12_2_table");
//     let m12_3 = document.querySelector(".m12_3");
//         let m12_3_table = document.querySelector(".m12_3_table");

//         main12.addEventListener("click", function(){
//             strategy.classList.remove("white");
//             visualIdentity.classList.add("white");
//             m1.classList.add("hide");
//             main1.classList.remove("white");
//             m2.classList.add("hide");
//             main2.classList.remove("white");
//             m3.classList.add("hide");
//             main3.classList.remove("white");
//             m4.classList.add("hide");
//             main4.classList.remove("white");
//             m5.classList.add("hide");
//             main5.classList.remove("white");
//             m6.classList.add("hide");
//             main6.classList.remove("white");
//             m7.classList.add("hide");
//             main7.classList.remove("white");
//             m8.classList.add("hide");
//             main8.classList.remove("white");
//             m9.classList.add("hide");
//             main9.classList.remove("white");
//             m12.classList.toggle("hide");
//             main12.classList.toggle("white");
//             m13.classList.add("hide");
//             main13.classList.remove("white");
//             m14.classList.add("hide");
//             main14.classList.remove("white");
//             m15.classList.add("hide");
//             main15.classList.remove("white");
//             m16.classList.add("hide");
//             main16.classList.remove("white");
//             m17.classList.add("hide");
//             main17.classList.remove("white");
//         })
//         m12_1.addEventListener("click", function(){
//             m12_1_table.classList.toggle("hide");
//             m12_1.classList.toggle("white");
//         })
//         m12_2.addEventListener("click", function(){
//             m12_2_table.classList.toggle("hide");
//             m12_2.classList.toggle("white");
//         })
//         m12_3.addEventListener("click", function(){
//             m12_3_table.classList.toggle("hide");
//             m12_3.classList.toggle("white");
//         })

let main13 = document.querySelector(".main13");
let m13 = document.querySelector(".m13");

    let m13_1 = document.querySelector(".m13_1");
        let m13_1_table = document.querySelector(".m13_1_table");
    let m13_2 = document.querySelector(".m13_2");
        let m13_2_table = document.querySelector(".m13_2_table");
    let m13_3 = document.querySelector(".m13_3");
        let m13_3_table = document.querySelector(".m13_3_table");

    main13.addEventListener("click", function(){
        strategy.classList.remove("white");
        visualIdentity.classList.add("white");
        m1.classList.add("hide");
        main1.classList.remove("white");
        m2.classList.add("hide");
        main2.classList.remove("white");
        m3.classList.add("hide");
        main3.classList.remove("white");
        m4.classList.add("hide");
        main4.classList.remove("white");
        m5.classList.add("hide");
        main5.classList.remove("white");
        m6.classList.add("hide");
        main6.classList.remove("white");
        m7.classList.add("hide");
        main7.classList.remove("white");
        m8.classList.add("hide");
        main8.classList.remove("white");
        m9.classList.add("hide");
        main9.classList.remove("white");
        // m12.classList.add("hide");
        // main12.classList.remove("white");
        m13.classList.toggle("hide");
        main13.classList.toggle("white");
        m14.classList.add("hide");
        main14.classList.remove("white");
        m15.classList.add("hide");
        main15.classList.remove("white");
        m16.classList.add("hide");
        main16.classList.remove("white");
        m17.classList.add("hide");
        main17.classList.remove("white");

    })
    m13_1.addEventListener("click", function(){
        m13_1_table.classList.toggle("hide");
        m13_1.scrollIntoView({behavior: 'smooth', block: 'start'});
        m13_2_table.classList.add("hide");
        m13_3_table.classList.add("hide");
        m13_1.classList.toggle("white");
        m13_2.classList.remove("white");
        m13_3.classList.remove("white");
    })
    m13_2.addEventListener("click", function(){
        m13_1_table.classList.add("hide");
        m13_2_table.classList.toggle("hide");
        m13_2.scrollIntoView({behavior: 'smooth', block: 'start'});
        m13_3_table.classList.add("hide");
        m13_1.classList.remove("white");
        m13_2.classList.toggle("white");
        m13_3.classList.remove("white");
    })
    m13_3.addEventListener("click", function(){
        m13_1_table.classList.add("hide");
        m13_2_table.classList.add("hide");
        m13_3_table.classList.toggle("hide");
        m13_3.scrollIntoView({behavior: 'smooth', block: 'start'});
        m13_1.classList.remove("white");
        m13_2.classList.remove("white");
        m13_3.classList.toggle("white");
    })


let main14 = document.querySelector(".main14");
let m14 = document.querySelector(".m14");

    let m14_1 = document.querySelector(".m14_1");
        let m14_1_table = document.querySelector(".m14_1_table");


        main14.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.toggle("hide");
            main14.classList.toggle("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m14_1.addEventListener("click", function(){
            m14_1_table.classList.toggle("hide");
            m14_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m14_1.classList.toggle("white");
        })

let main15 = document.querySelector(".main15");
let m15 = document.querySelector(".m15");

    let m15_1 = document.querySelector(".m15_1");
        let m15_1_table = document.querySelector(".m15_1_table");
    let m15_2 = document.querySelector(".m15_2");
        let m15_2_table = document.querySelector(".m15_2_table");
    let m15_3 = document.querySelector(".m15_3");
        let m15_3_table = document.querySelector(".m15_3_table");

        main15.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.toggle("hide");
            main15.classList.toggle("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m15_1.addEventListener("click", function(){
            m15_1_table.classList.toggle("hide");
            m15_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m15_2_table.classList.add("hide");
            m15_3_table.classList.add("hide");
            m15_1.classList.toggle("white");
            m15_2.classList.remove("white");
            m15_3.classList.remove("white");
        })
        m15_2.addEventListener("click", function(){
            m15_1_table.classList.add("hide");
            m15_2_table.classList.toggle("hide");
            m15_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m15_3_table.classList.add("hide");
            m15_1.classList.remove("white");
            m15_2.classList.toggle("white");
            m15_3.classList.remove("white");
        })
        m15_3.addEventListener("click", function(){
            m15_1_table.classList.add("hide");
            m15_2_table.classList.add("hide");
            m15_3_table.classList.toggle("hide");
            m15_3.scrollIntoView({behavior: 'smooth', block: 'start'});
            m15_1.classList.remove("white");
            m15_2.classList.remove("white");
            m15_3.classList.toggle("white");
        })

let main16 = document.querySelector(".main16");
let m16 = document.querySelector(".m16");

    let m16_1 = document.querySelector(".m16_1");
        let m16_1_table = document.querySelector(".m16_1_table");

    let m16_2 = document.querySelector(".m16_2");
        let m16_2_table = document.querySelector(".m16_2_table");


        main16.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.toggle("hide");
            main16.classList.toggle("white");
            m17.classList.add("hide");
            main17.classList.remove("white");

        })
        m16_1.addEventListener("click", function(){
            m16_1_table.classList.toggle("hide");
            m16_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m16_2_table.classList.add("hide");
            m16_1.classList.toggle("white");
            m16_2.classList.remove("white");
        })

        m16_2.addEventListener("click", function(){
            m16_1_table.classList.add("hide");
            m16_2_table.classList.toggle("hide");
            m16_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m16_1.classList.remove("white");
            m16_2.classList.toggle("white");
        })

let main17 = document.querySelector(".main17");
let m17 = document.querySelector(".m17");

    let m17_1 = document.querySelector(".m17_1");
        let m17_1_table = document.querySelector(".m17_1_table");
    let m17_2 = document.querySelector(".m17_2");
        let m17_2_table = document.querySelector(".m17_2_table");
    let m17_3 = document.querySelector(".m17_3");
        let m17_3_table = document.querySelector(".m17_3_table");

        main17.addEventListener("click", function(){
            strategy.classList.remove("white");
            visualIdentity.classList.add("white");
            m1.classList.add("hide");
            main1.classList.remove("white");
            m2.classList.add("hide");
            main2.classList.remove("white");
            m3.classList.add("hide");
            main3.classList.remove("white");
            m4.classList.add("hide");
            main4.classList.remove("white");
            m5.classList.add("hide");
            main5.classList.remove("white");
            m6.classList.add("hide");
            main6.classList.remove("white");
            m7.classList.add("hide");
            main7.classList.remove("white");
            m8.classList.add("hide");
            main8.classList.remove("white");
            m9.classList.add("hide");
            main9.classList.remove("white");
            // m12.classList.add("hide");
            // main12.classList.remove("white");
            m13.classList.add("hide");
            main13.classList.remove("white");
            m14.classList.add("hide");
            main14.classList.remove("white");
            m15.classList.add("hide");
            main15.classList.remove("white");
            m16.classList.add("hide");
            main16.classList.remove("white");
            m17.classList.toggle("hide");
            main17.classList.toggle("white");

        })
        m17_1.addEventListener("click", function(){
            m17_1_table.classList.toggle("hide");
            m17_1.scrollIntoView({behavior: 'smooth', block: 'start'});
            m17_2_table.classList.add("hide");
            m17_3_table.classList.add("hide");
            m17_1.classList.toggle("white");
            m17_2.classList.remove("white");
            m17_3.classList.remove("white");
        })
        m17_2.addEventListener("click", function(){
            m17_1_table.classList.add("hide");
            m17_2_table.classList.toggle("hide");
            m17_2.scrollIntoView({behavior: 'smooth', block: 'start'});
            m17_3_table.classList.add("hide");
            m17_1.classList.remove("white");
            m17_2.classList.toggle("white");
            m17_3.classList.remove("white");
        })
        m17_3.addEventListener("click", function(){
            m17_1_table.classList.add("hide");
            m17_2_table.classList.add("hide");
            m17_3_table.classList.toggle("hide");
            m17_3.scrollIntoView({behavior: 'smooth', block: 'start'});
            m17_1.classList.remove("white");
            m17_2.classList.remove("white");
            m17_3.classList.toggle("white");
        })
