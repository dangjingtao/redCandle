/**
 * 一般方法
 */

'use strict';

import React, { Component } from 'react';

export default class {

    /*
     * 渲染导出的表格
     */
    static renderTable(data){
        // console.log(data);

        let table={
            main:{
                width:'100%',
                border:'1px solid #ccc',
                borderCollapse:'collapse'
            },

            headerTd:{
                height:40,
                background:'rgb(233,158,141)',
                color:'#fff',
                border:'1px solid #fff',
                textAlign:'center',
                width:80
            },


            tdOdd:{// 能被4整除
                border:'1px solid rgb(253,210,200)',
                background:'rgb(250,250,250)',
                textAlign:'center',
                height:40,
                fontSize:18
            },

            tdEven:{// 能被4整除
                background:'rgb(253,210,200)',
                border:'1px solid rgb(250,250,250)',
                textAlign:'center',
                height:40,
                fontSize:18
            },
            nameEven:{
                width:'76px',
                textAlign:'center',
                background:'rgb(253,210,200)'
            },
            nameOdd:{
                width:'76px',
                textAlign:'center',
                background:'rgb(210,160,142)',
                color:'#fff'
            }
        }

        let header=null;
        let _header=[];
        let _header2=[];

        let result=data.map((x,i)=>{
            if(i==0){
                header=(
                    <tHead>
                        <tr>
                            <td style={{textAlign:'center'}} colSpan="9">{x[0]}</td>
                        </tr>
                    </tHead>
                )
            }

            if(i==2){
                
                x.map((y,j)=>{
                    if(j==0){
                        if(y!==null){
                            _header.push(<td style={{width:'76px',textAlign:'center',background:'rgb(77,77,77)',color:'#fff'}} key={j} rowSpan="2">{y}</td>)
                        }else{
                            _header.push(false)
                        }
                    }else{
                        _header2.push(
                            <td style={table.headerTd} key={j}>{y}</td>
                        )
                    }  

                })
            }

            if(i==3){
                
                x.map((y,j)=>{
                    if(j==0){
                        if(y!==null){
                            _header2.push(<td key={j} rowSpan="2">{y}</td>)
                        }else{
                            _header2.push(false)
                        }
                    }else{
                        _header.push(
                            <td style={table.headerTd} key={j}>{y}</td>
                        )
                    }  

                })
            }


            if(i>3){
                let row=[];
                if(i%2==0){
                    // 有姓名信息
                    let info=x.map((y,j)=>{
                        if(j==0){

                            if(i%4!==0){
                                return (
                                    <td style={table.nameEven} rowSpan="2" key={j}>{y}</td>
                                )
                            }else{
                                return (
                                    <td style={table.nameOdd} rowSpan="2" key={j}>{y}</td>
                                )
                            }
                            
                            
                        }else{
                            if(data[i+1][j]==null){
                                
                                if(i%4==2||i%4==1){
                                    
                                    // style={table.tdOdd} 
                                    return (
                                        <td style={table.tdOdd} rowSpan="2" key={j}>{y}</td>
                                    )
                                }else{
                                    return (
                                        <td style={table.tdEven} rowSpan="2" key={j}>{y}</td>
                                    )
                                }
                            }else{
                                if(i%4==2||i%4==1){
                                    // style={table.tdOdd} 
                                    return (
                                        <td style={table.tdOdd} key={j}>{y}</td>
                                    )
                                }else{
                                    return (
                                        <td style={table.tdEven} key={j}>{y}</td>
                                    )
                                }
                                
                            }
                        }
                    });
                    
                    return (
                        <tr key={i}>{info}</tr>
                    )

                }else{
                    // 无姓名信息

                    let _info=x.map((y,j)=>{
                        if(j==0){
                            return (
                               false
                            )
                        }else{

                            if(y==null){
                           
                                return (
                                    false
                                )
                            }else{

                                if(i%4==2||i%4==3){
                                    // style={table.tdOdd} 
                                    return (
                                        <td style={table.tdOdd} key={j}>{y}</td>
                                    )
                                }else{
                                    return (
                                        <td style={table.tdEven} key={j}>{y}</td>
                                    )
                                }

                                // return (
                                //     <td key={j}>{y}</td>
                                // )
                            }

                            
                            
                        }
                    });

                    return (
                        <tr key={i}>{_info}</tr>
                    )
                }

            }





        })

        return (<table cellSpacing="0" style={table.main}>
            {/* {header} */}
            <tBody>
                <tr>
                    {_header}
                </tr>
                <tr>
                    {_header2}
                </tr>

                {result}

            </tBody>
        </table>)

    }




}
