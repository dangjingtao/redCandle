// 首页

import React, { Component } from 'react';
import Img from '../lib/img';
import Sidebar from '../component/sidbar';
import Api from '../res/api';
import Http from '../lib/http';
import Base from '../lib/base'


export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
           tableData:[]
        }

        this.exchange=this.exchange.bind(this)

    }

    exchange(){

        let param={
            file:this.refs.file.files[0]
        }

        let _this=this;

        Http.post(Api.exchangeTable,param,(data)=>{
            _this.setState({
                tableData:data.data.list
            })
        })
    }

    render(){

        const home={
            body:{
                position:'fixed',
                top:0,
                bottom:0,
                left:200,
                right:0,
                padding:20
            },
            header:{
                height:100,
                borderBottom:'1px solid #ccc'
            },

            bodyMain:{
                position:'fixed',
                left:200,
                right:0,
                top:140,
                bottom:0,
                
                padding:10,
                margin:'20px auto',
                height:700,

                overflowY:'scroll'
            },
            table:{
                width:'1200px',
                padding:10,
                margin:'20px auto',
                minHeight:700,
                border:'1px solid #ccc',
                boderRadius:'4px',
                overFlowY:'scroll'
            }
        }

        let table=Base.renderTable(this.state.tableData);

        return (
            <div>
                <Sidebar />

                <div style={home.body}>
                    <div style={home.header}>
                        <h2>转换排班表</h2>
                        <input ref="file" type="file"/>
                        <button onClick={this.exchange}>提交</button>
                        <button>打印</button>
                    </div>

                    {/* 主体 */}
                    <div style={home.bodyMain}>
                        <div style={home.table}>
                            {table}
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}   