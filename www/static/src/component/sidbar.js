// 首页

import React, { Component } from 'react';
import Img from '../lib/img';
import '../../css/fonts.css';


export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }

    }

    render(){

        const styles={
            sidebar:{
                position:'fixed',
                top:0,
                bottom:0,
                left:0,
                width:200,
                background:'rgba(4,23,58)',
                
            },

            sidebarHeader:{
                // height:180,
                width:180,
                padding:10,
                borderBottom:'1px solid #aaa'
            },

            sidebarTitle:{
                margin:0,
                padding:0,
                fontSize:24,
                color:"#fff",
                textAlign:'center',
                lineHeight:'40px',
                fontFamily:'FZLTCX'
            },
            logo:{
                display:'block',
                margin:'20px auto 10px'
            },

            sidebarLink:{
                display:'block',
                width:'100%',
                lineHeight:'42px',
                fontSize:20,
                color:'#f5f5f5',
                textAlign:'center',
                textDecoration:'none'
            }
        }


        return (

                <div style={styles.sidebar}>
                    <div style={styles.sidebarHeader}>
                        <img style={styles.logo} src=""/>
                        <h2 style={styles.sidebarTitle}>brand</h2>
                    </div>

                    <div style={{marginTop:20}}>
                        <a style={styles.sidebarLink} href="javascript:;">导出排班表</a>
                    </div>
                </div>
        )
    }
}   