import React from "react";
import {Fab, Toolbar} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import red from "@material-ui/core/colors/red";
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Pagination from './Pagination.jsx'

import PropTypes from 'prop-types';

const styles = theme => ({
    button:{
        marginLeft: theme.spacing.unit * 1,
        marginRight:theme.spacing.unit * 1
    },
    rightButton:{
        marginLeft:theme.spacing.unit * 1
    },
    card: {
        marginBottom:theme.spacing.unit *3
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    icon:{
        marginRight:theme.spacing.unit
    },
    avatar: {
        backgroundColor: red[500],
    },
    blogList:{
        margin:0,
        padding:0,
    }
});

const featuredPosts = [
    {
        id:1,
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:2,
        title: 'Post title1',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:3,
        title: 'Post title2',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:4,
        title: 'Post title3',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:5,
        title: 'Post title4',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:6,
        title: 'Post title5',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:7,
        title: 'Post title6',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id:8,
        title: 'Post title7',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    }
];

class BlogItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.date}
                    />

                    <CardContent>


                        <Typography component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        Continue
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

BlogItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
const BlogItemShow = withStyles(styles)(BlogItem);

class BlogPage extends React.Component{
    constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:featuredPosts,
            current: 1, //当前页码
            pageSize:5, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0,//总页数
        };
    }

    componentWillMount(){
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.state.totalData.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)

    }

    //设置内容
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice(num,num+this.state.pageSize)
        })
    }


    pageNext (num) {
        this.setPage(num)
    }



    render() {
        const{classes} = this.props;
        return (
            <div>
                    <ul className={classes.blogList}>
                        {this.state.indexList.map(function (item) {
                            return <BlogItemShow key={item.id} {...item} />
                        })}
                    </ul>

                    <Pagination { ...this.state } pageNext={this.pageNext} />

            </div>
        );
    }
}

export default withStyles(styles)(BlogPage);