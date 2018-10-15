import React, { Component } from 'react';
import { Card, Form, Input, Button, Select, DatePicker, Table, Modal, message } from 'antd'
import axios from '../../axios'
import "../../views/order/order.css"
const { RangePicker } = DatePicker;
const FormItem = Form.Item
const Option = Select.Option

class FilterForm extends Component {
    constructor(props) {
        super(props)
    }

    orderData = [
        {
            label: '全部',
            id: 0
        },
        {
            label: '进行中',
            id: 1
        },
        {
            label: '结束行程',
            id: 2
        }
    ]

    cityData = [
        {
            label: '北京',
            id: '0'
        },
        {
            label: '上海',
            id: '1'
        },
        {
            label: '广州',
            id: '2'
        }
    ]

    // handleClick = () => {
    //     this.props.form.resetFields()
    // }

    // handleSearch = () => {
    //     const form = this.props.form.getFieldsValue()
    //     console.log(form);
    // }

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline'>
                <FormItem label='城市'>
                    {getFieldDecorator('city')(
                        <Select placeholder='请选择一个城市' style={{ width: 180 }}>
                            {this.cityData.map(item =>
                                <Option value={item.id} key={item.id}>{item.label}</Option>
                            )}
                        </Select>
                    )}

                </FormItem>
                <FormItem label='订单时间'>
                    {getFieldDecorator('orderTime')(
                        <RangePicker></RangePicker>
                    )}
                </FormItem>
                <FormItem label='订单状态'>
                    {
                        getFieldDecorator('status')(
                            <Select placeholder='请选择一个状态' style={{ width: 180 }}>
                                {this.orderData.map(item =>
                                    <Option value={item.id} key={item.id}>{item.label}</Option>
                                )}
                            </Select>
                        )
                    }
                </FormItem>
                <div className="find">
                    <Button type='primary' className="find1">
                        查询
                   </Button>
                    <Button>重置</Button>
                </div>
            </Form>
        )
    }
}
const FilterFormWrap = Form.create()(FilterForm)

export default class Order extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        tableData: [],
        pageSize: "",
        total: "",
        isLoading: false,
        endItem:{},
        selectedIndex:[]
    }
    params = {
        pn: 1
    }
    componentWillMount() {
        this.getTable()
    }
    // 表格数据获取
    getTable = () => {
        this.setState({
            isLoading: true
        })
        axios.get('/order/list', this.params).then(res => {
            if (res.code == 0) {
                this.setState({
                    tableData: res.result.item_list.map((item, index) => {
                        item.key = index
                        return item
                    }),
                    pageSize: 10,
                    total: res.result.total_count,
                    isLoading: false
                })
            }
        })
    }
    //结束订单(弹出结束框)
    handleDone = () => {
        let selectedItem = this.state.selectedItem
        if (selectedItem) {
            axios.get("/order/ebike_info",{id:selectedItem[0].id}).then(res=>{
                console.log(res)
                this.setState({
                    endItem:res.result,
                    isShowModal:true
                })
            })
        } else {
            message.info("请选择一项订单进行操作")
        }
    }
    //(用户选择结束)
    handleEnd = () => {
        let id = this.state.selectedItem[0].id
        this.setState({
            isShowModal:false
        })
        axios.get("/order/finish_order",{id}).then(res=>{
            if(res.code == 0 ){
               message.success("结束订单成功")
               this.getTable()
            }
        })
    }
    handledetail = ()=>{
        let item = this.state.selectedItem
        if(item){
            window.open(`/#/admin/orderdetail/${item[0].id}`,"_blank")
        }else{
            message.info("请选择一个订单进行操作")
        }
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]

        const pagination = {
            total: this.state.total,
            pageSize: 10,
            onChange: (index) => {
                this.params.pn = index
                this.getTable()
            },

        }
        const rowSelection = {
            type: "radio",
            selectedRowKeys: this.state.selectedIndex,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(selectedRowKeys, selectedRows)
                this.setState({
                    selectedItem: selectedRows,
                    selectedIndex: selectedRowKeys
                })
            }
        }
        return (
            <div className="order-wrap">
                <Card>
                    <FilterFormWrap></FilterFormWrap>
                </Card>
                <Card className='btn-wrap'>
                    <Button type='primary' className="find1" onClick={this.handledetail}>订单详情</Button>
                    <Button type='primary' onClick={this.handleDone}>结束订单</Button>
                </Card>
                <Card   >
                    <Table
                        columns={columns}
                        dataSource={this.state.tableData}
                        pagination={pagination}
                        loading={this.state.isLoading}
                        rowSelection={rowSelection}
                    ></Table>
                </Card>
                <Modal
                    title="结束订单"
                    visible={this.state.isShowModal}
                    onOk={this.handleEnd}
                    onCancel={() => this.setState({ isShowModal: false })}>
                    <ul className="ul-data">
                        <li>
                            <span>车辆编号 :</span>
                            {this.state.endItem.bike_sn}
                        </li>
                        <li>
                            <span>剩余电量 :</span>
                            {this.state.endItem.battery}
                        </li>
                        <li>
                            <span>行程开始时间 :</span>
                            {this.state.endItem.start_time}
                        </li>
                        <li>
                            <span>当前位置 :</span>
                            {this.state.endItem.location}
                        </li>
                    </ul>
                </Modal>
            </div>
        )
    }
}

