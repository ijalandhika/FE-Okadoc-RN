import React, { useState } from "react";
import { View} from "react-native";
import {data} from '../constans/general'   // import operation data
import FlatListComponent from '../components/FlatListComponent'
import TextInputComponent from '../components/TextInputComponent'  
import {prime,fibonacci,sum,multiply} from '../utils/helper'   // import operation function

const {log}=console
const HomeScreen = (props) => {
    
    const [id,setId] = useState('')
    const [input1,setinput1] = useState(0)  // value of textinput 1
    const [input2,setinput2] = useState(0)  // value of textinput 2
   
    let width = (id===2 || id===3) ? 0 : '100%'   // visibility of  textinput2 ( the second number )
    let height = (id===2 || id===3) ? 0 : 50      // visibility of  textinput2 (the second number )

   
    return (
        <View  style={{margin:'5%'}}> 
            <View style={{marginTop:'10%'}}>                     
                 <FlatListComponent data={data} callback={(id)=>{    //  render  operation button
                        setinput1(0)
                        setinput2(0)
                        setId(id)
                     }} />
            </View>
            
            <View style={{marginTop:'7%'}}>            
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[0] : 'input'} // setting textinput1 ( first number or first N prime or N fibonacci )
                    width={'100%'}
                    height={50}
                    backgroundColor ={'#dff9fb'}  
                    onChangeText={(input)=>{
                        if(/[^0-9]/.test(input) && (id===2 || id===3 )) { // check if not a digit
                          alert('masukan angka  0 - 9')
                          input= input.slice(0,input.length-1)
                        } 
                        setinput1(+input)
                      }}
                    
                    />
                <TextInputComponent 
                    placeholder={id!==''?  data[id].placeHolder[1] : 'input'} // setting textinput2 ( second number )
                    width={width}
                    height={height}
                    backgroundColor ={'#dff9fb'}
                    onChangeText={(input)=>{
                        setinput2(+input)
                      }}
                    />
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[2] : 'input'} // setting textinput3 ( result )
                    multiline 
                    editable={false}
                    width={'100%'}
                    textAlignVertical={'center'}
                    padding={0}
                    height={50}
                    backgroundColor={'#F8EFBA'} >
                {(input1 && input2 && id===0) ?  sum(input1,input2) : (input1 && input2 && id===1)? multiply(input1,input2) : (input1 && id===2)? prime(input1) :(input1 && id===3)? fibonacci(input1) : 'Result' }
                </TextInputComponent>
            </View>
            
            
        </View>
    )
}

export default HomeScreen

