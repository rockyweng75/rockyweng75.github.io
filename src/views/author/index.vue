<template>
    <el-affix :offset="0">
        <el-button type="primary" @click="black">返回入口</el-button>
    </el-affix>
    <el-card>
        <template #header>
            個人黑歷史
        </template>
        <el-timeline>
            <el-timeline-item timestamp="菜鳥第一年" placement="top">
            <el-card>
                <h4>為某保險公司內撰寫Oracle Stored Procedures</h4>
                <p>主要開發技能：SQL</p>
                <p>角色：PG</p>
                <p>專案：大型專案</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="菜鳥第二年" placement="top">
            <el-card>
                <h4>為某保險公司內撰寫排程報表</h4>
                <p>主要開發技能：SQL、JAVA、Crystal Report</p>
                <p>角色：PG</p>
                <p>專案：大型專案</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="菜鳥第三、四年" placement="top">
            <el-card>
                <h4>為某保險公司內撰寫理賠模組</h4>
                <p>>主要開發技能：SQL、JAVA、Nibernate、Crystal Report</p>
                <p>角色：PG、SA</p>
                <p>專案：大型專案</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="菜鳥第五年" placement="top">
            <el-card>
                <h4>為某保險公司內撰寫產險核保單元</h4>
                <p>主要開發技能：SQL、JAVA、MyBatis、Java spring</p>
                <p>角色：PG</p>
                <p>專案：大型專案</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="假新手第一年" placement="top">
            <el-card>
                <h4>轉至某大學開發校務系統</h4>
                <p>主要開發技能：SQL、C#、VB.net</p>
                <p>角色：全端</p>
                <p>專案：小型專案數個(維運、翻寫)</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="假新手第三年" placement="top">
            <el-card>
                <h4>為某大學開發校務系統，開始使用Node.js</h4>
                <p>>主要開發技能：SQL、C#、VB.net、Node.js、Vue、Angular</p>
                <p>角色：全端</p>
                <p>專案：小型專案數個(維運、翻寫)</p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="至今" placement="top">
            <el-card>
                <h4>為某大學開發校務系統</h4>
                <p>>主要開發技能：SQL、C#、VB.net、Node.js、Vue</p>
                <p>角色：全端</p>
                <p>專案：小型專案數個(維運、翻寫)</p>
            </el-card>
            </el-timeline-item>
        </el-timeline>
    </el-card>
    <el-row>
        <el-col :span="12">
            <el-card>
                <template #header>
                    不擅長語言
                </template>
                <el-tree :data="noLikekills" :props="defaultProps" :default-expand-all="true"/>
            </el-card>
            <el-card>
                <template #header>
                    個人作品
                </template>
                <el-empty description="工作用小工具不方便攜出" />
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card>
                <template #header>
                    常用技能(依常用排序)
                </template>
                <el-tree :data="kills" :props="defaultProps" :default-expand-all="true"/>
            </el-card>
        </el-col>
    </el-row>
    <el-backtop :right="100" :bottom="100" />

</template>
<script>

import { useRouter } from 'vue-router';

const defaultProps = {
    children: 'children',
    label: 'label',
}

export default {
    setup() {
        const router = useRouter();
        return {
            noLikekills:[
                {
                    label: 'PHP',
                },
                {
                    label: '語義型',
                    children:[
                        { label: 'pythod' }, 
                        { label:'ruby' }, 
                    ]
                },
            ],
            kills:[
                {
                    label: '資料庫',
                    children:[
                        {label: 'Oracel'}, {label:'Mssql'}, {label:'MySql'}, {label: 'Mongodb'}
                    ]
                },
                {
                    label: 'ORM',
                    children:[
                        { label:'Dapper'}, {label:'Entity Framework'}, {label: 'odbc'}, {label: 'Hibernate'}
                    ]
                },
                {
                    label: '程式語言',
                    children:[
                        {label:'C#'}, {label:'Javascript'}, {label: 'Java'}, {label: 'VB.net'}
                    ]
                },
                {
                    label: '後端程式架構',
                    children:[
                        {label:'.net framework'},
                        {label:'.net Core'}, 
                        {label: 'node'},
                        {label: 'VB.net'}
                    ]
                },
                {
                    label: '前端程式架構',
                    children:[
                        {label:'vue3 + vue-router + element-plus'},
                        {label:'vue3 + vue-router + MVC router + razor 混用'}, 
                        {label:'razor + jquery + bootstrap'},
                    ]
                },
                {
                    label: '其他',
                    children:[
                        { label:'azure' },
                    ]
                }
            ],
            defaultProps,
            black : () =>{
                router.push('/')
            }
        };
    },
}
</script>