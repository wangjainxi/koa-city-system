## 机构管理

数据列表

```js
tableData: [
        { id: 1, code: '37120000', name: '测试机构', type: '监督控制中心', higthlevel: '1111', tel: '' },
        { id: 2, code: '14090032', name: '忻州经济技术开发区建设环境', type: '专业', higthlevel: '', tel: '' },
        { id: 3, code: '14090030', name: '忻州经济技术开发环卫队', type: '专业', higthlevel: '', tel: '' },
        { id: 4, code: '14090029', name: '忻州经济技术开发区城市综合监察', type: '专业部门', higthlevel: '', tel: '' },
        { id: 5, code: '14090028', name: '市建设局总工办', type: '专业部门', higthlevel: '', tel: '' },
        { id: 6, code: '14090027', name: '建管科', type: '专业部门', higthlevel: '', tel: '' },
        { id: 7, code: '14090026', name: '安全站', type: '专业部门', higthlevel: '', tel: '' },
        { id: 8, code: '14090025', name: '招标办', type: '专业部门', higthlevel: '', tel: '' },
        { id: 9, code: '14090024', name: '工程质量监督站', type: '专业部门', higthlevel: '', tel: '' },
        { id: 10, code: '14090023', name: '市城建监察支队', type: '专业部门', higthlevel: '', tel: '' }
      ]
```



## 角色管理

```js
tableData: [
        { checkbox: false, id: 201220629145151, code: 'monitor', name: '值班长' },
        { checkbox: false, id: 1, code: 'leader', name: '领导' },
        { checkbox: false, id: 2, code: 'department', name: '专业部门' },
        { checkbox: false, id: 3, code: 'ADunit', name: '执法大队' },
        { checkbox: false, id: 4, code: 'admin', name: '管理员' },
        { checkbox: false, id: 5, code: 'ADdepartment', name: '法规科' },
        { checkbox: false, id: 6, code: '005', name: '值班员' },
        { checkbox: false, id: 6, code: '004', name: '接线员' },
        { checkbox: false, id: 6, code: '003', name: '监督员' },
        { checkbox: false, id: 6, code: '0015', name: '坐席员' }
      ],
```



## 用户管理

```js
tableData: [
        {
          checkbox: true,
          username: 'aaa',
          name: '值班长',
          role: '',
          PDA: 2412424,
          status: true
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '刘美丽',
          role: '',
          PDA: 121212,
          status: false
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '专业部门',
          role: '',
          PDA: 2121244,
          status: false
        },
        {
          checkbox: false,
          username: 'ccc',
          name: '监督员',
          role: '',
          PDA: 32234234,
          status: false
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '专业部门',
          role: '',
          PDA: 3242342,
          status: false
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '值班长',
          role: '',
          PDA: 3424,
          status: false
        },
        {
          checkbox: false,
          username: 'asdsada',
          name: '值班长',
          role: '',
          PDA: 453,
          status: false
        },
        {
          checkbox: false,
          username: 'sdas',
          name: '环卫刘丽',
          role: '',
          PDA: 3434,
          status: false
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '城管局',
          role: '',
          PDA: 23242,
          status: false
        },
        {
          checkbox: false,
          username: 'aaa',
          name: '城管局',
          role: '',
          PDA: 3242,
          status: false
        }
      ]
```

##   人员管理

```js
tableData: [

    {

     checkbox: false,

     sex: '男',

     name: '监督员',

     tel: 13911111111,

     belongIns: '忻州经济技术开发区建设环境保护局'

    },

    {

     checkbox: false,

     sex: '男',

     name: '专门部门',

     tel: 13911111111,

     belongIns: '忻州经济技术开发区环卫队'

    },

    {

     checkbox: false,

     sex: '男',

     name: '值班长',

     tel: 13911111111,

     belongIns: '忻州经济技术开发区建设环境保护局'

    },

    {

     checkbox: false,

     sex: '男',

     name: '值班员',

     tel: 13911111111,

     belongIns: '忻州经济技术开发区建设环境保护局'

    },

    {

     checkbox: false,

     sex: '女',

     name: '环卫刘丽',

     tel: 13911111111,

     belongIns: '忻州市市容环境卫生管理处'

    },

    {

     checkbox: false,

     sex: '女',

     name: '刘美丽',

     tel: 13911111111,

     belongIns: '忻州市邮政局'

    },

    {

     checkbox: false,

     sex: '男',

     name: '城管局',

     tel: 13911111111,

     belongIns: '城管局'

    },

    {

     checkbox: false,

     sex: '男',

     name: '执法二大',

     tel: 13911111111,

     belongIns: '执法二大'

    },

    {

     checkbox: false,

     sex: '男',

     name: '执法三大大',

     tel: 13911111111,

     belongIns: '执法三大队'

    },

    {

     checkbox: false,

     sex: '男',

     name: '值班员',

     tel: 13911111111,

     belongIns: '城管局'

    }

   ],

```

## 菜单管理

```js
 tableData: [
        {
          checkbox: false,
          id: 'admin',
          name: '构建维护',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'departmentadmin',
          name: '机构管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'groupadmin',
          name: '角色管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'personAdmin',
          name: '人员管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'userAdmin',
          name: '用户管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'MsgUserGroup',
          name: '用户分组',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'menuAdmin',
          name: '菜单管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'archiveAdmin',
          name: '案件管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'archivetype',
          name: '案件类型',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        },
        {
          checkbox: false,
          id: 'menu——videolook',
          name: '视频组管理',
          father: 'admin',
          menulink: 'wwwwwwwwwwww',
          imglink: ''
        }
      ]
```

## 工作流

```js
  tableData: [
        { checkbox: false, id: 1, max: 3, min: 0, color: { name: 'Red', color: '#ff0000' }, remark: '立案数较少' },
        { checkbox: false, id: 2, max: 6, min: 4, color: { name: 'Green', color: '#00ff00' }, remark: '立案数较少' },
        { checkbox: false, id: 3, max: 9, min: 7, color: { name: 'Blue', color: '#0000ff' }, remark: '立案数较少' },
        { checkbox: false, id: 4, max: 15, min: 10, color: { name: 'Yellow', color: '#ffff00' }, remark: '立案数较少' },
        { checkbox: false, id: 5, max: 20, min: 16, color: { name: 'purple', color: '#ff00ff' }, remark: '立案数较少' },
        { checkbox: false, id: 6, max: 600, min: 21, color: { name: 'Cyan', color: '#00ffff' }, remark: '立案数较少' }

      ],
```



## 公告

```js
tableData: [
        { title: '今天是第一', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: true, desc: '内容.....' },
        { title: '今天是6月26号', publish: 'admin', publishdate: new Date(), roll: '1', checkbox: true, desc: '内容.....' },
        { title: '222', publish: '测试班长', publishdate: new Date(), roll: '2', checkbox: true, desc: '内容.....' },
        { title: '1111', publish: '测试班长', publishdate: new Date(), roll: '1', checkbox: true, desc: '内容.....' },
        { title: '6666', publish: '贾苏', publishdate: new Date(), roll: '3', checkbox: true, desc: '内容.....' },
        { title: '发卷子了', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: true, desc: '内容.....' },
        { title: '测试的标题', publish: 'admin', publishdate: new Date(), roll: '5', checkbox: true, desc: '内容.....' },
        { title: '不发了', publish: '测试班长', publishdate: new Date(), roll: '2', checkbox: true, desc: '内容.....' },
        { title: '发给电工的公告', publish: '测试班长', publishdate: new Date(), roll: '3', checkbox: true, desc: '内容.....' },
        { title: '今天发卷子了', publish: '测试班长', publishdate: new Date(), roll: '1', checkbox: true, desc: '内容.....' }
      ],
```

## 案件 类型

```js
caseType: [
        { id: 1,
          label: '事件',
          children: [
            { id: 40, label: '市容环境', children: [
              { id: 15, label: '市容环境1-1' },
              { id: 16, label: '市容环境1-2' },
              { id: 17, label: '市容环境1-3' }
            ] },
            { id: 3, label: '宣传广告', children: [
              { id: 18, label: '宣传广告1-1' },
              { id: 19, label: '宣传广告1-2' },
              { id: 20, label: '宣传广告1-3' }
            ] },
            { id: 4, label: '施工管理', children: [
              { id: 21, label: '施工管理1-1' },
              { id: 22, label: '施工管理1-2' },
              { id: 23, label: '施工管理1-3' }
            ] },
            { id: 5, label: '突发事件', children: [
              { id: 24, label: '突发事件-1' },
              { id: 25, label: '突发事件-2' },
              { id: 26, label: '突发事件-3' }
            ] },
            { id: 6, label: '街面秩序', children: [
              { id: 14, label: '扩展事件' }
            ] },
            { id: 7, label: '热线问题', children: [
              { id: 33, label: '热线问题-1' },
              { id: 34, label: '热线问题-2' },
              { id: 35, label: '热线问题-3' }
            ] },
            { id: 8, label: '违法建设类', children: [
              { id: 36, label: '违法建设' }
            ] }

        },
        { id: 2,
          label: '部件',
          children: [
            { id: 9, label: '公共设施', children: [
              { id: 27, label: '公共设施-1' },
              { id: 28, label: '公共设施-2' },
              { id: 29, label: '公共设施-3' }
            ] },
            { id: 10, label: '道路交通', children: [
              { id: 30, label: '道路交通-1' },
              { id: 31, label: '道路交通-2' },
              { id: 32, label: '道路交通-3' }
            ] },
            { id: 11, label: '市容环境', children: [] },
            { id: 12, label: '园林绿化', children: [] },
            { id: 13, label: '房屋土地', children: [] }
          ]
        }
      ]
```

## 问题来源

```js
tableData: [
        { checkbox: false, id: 201220629145151, name: '监督员上报' },
        { checkbox: false, id: 1, name: '监督员上报' },
        { checkbox: false, id: 2, name: '网上投诉' },
        { checkbox: false, id: 3, name: '市民来电' },
        { checkbox: false, id: 4, name: '巡查发现' },
        { checkbox: false, id: 5, name: '监控发现' },
        { checkbox: false, id: 6, name: '12345市长热线' }
      ]
```

## 预警颜色

```js
tableData: [
        { checkbox: false, id: 1, max: 3, min: 0, color: { name: 'Red', color: '#ff0000' }, remark: '立案数较少' },
        { checkbox: false, id: 2, max: 6, min: 4, color: { name: 'Green', color: '#00ff00' }, remark: '立案数较少' },
        { checkbox: false, id: 3, max: 9, min: 7, color: { name: 'Blue', color: '#0000ff' }, remark: '立案数较少' },
        { checkbox: false, id: 4, max: 15, min: 10, color: { name: 'Yellow', color: '#ffff00' }, remark: '立案数较少' },
        { checkbox: false, id: 5, max: 20, min: 16, color: { name: 'purple', color: '#ff00ff' }, remark: '立案数较少' },
        { checkbox: false, id: 6, max: 600, min: 21, color: { name: 'Cyan', color: '#00ffff' }, remark: '立案数较少' }

      ]
```

