import React from "react";
import {Fab, Toolbar} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import red from "@material-ui/core/colors/red";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    leftButton: {
        marginRight:theme.spacing.unit *3
    },
    rightButton:{
        marginLeft:theme.spacing.unit *3
    },
    pageButtons:{
        marginLeft:theme.spacing.unit * 18
    }
});

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num:0,
            page: this.props.current
        }
    }

    setPage(page,isNext) {
        if(isNext){
            this.setState({
                num:this.state.num+this.props.pageSize,
                page:page
            },()=>{
                console.log(this.state.page);
                this.props.pageNext(this.state.num)
            });
        }else{
            this.setState({
                num:this.state.num-this.props.pageSize,
                page:page
            },()=>{
                console.log(this.state.page);
                this.props.pageNext(this.state.num)
            });
        }

    }

    //下一页
    setNext(){
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.state.num + this.props.pageSize,
                pagenum:this.state.pagenum + 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }

    //上一页
    setUp(){
        if(this.state.pagenum > 1){
            this.setState({
                num:this.state.num - this.props.pageSize,
                pagenum:this.state.pagenum - 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }

    render() {
        const {totalPage} = this.props;
        const {classes} = this.props;
        const {page} = this.state;
        return (
            totalPage > 1 &&
            <Toolbar>
                    <div>
                        {
                            `Page ${page} of ${totalPage}`
                        }
                    </div>
                    <div className={classes.pageButtons}>
                        {
                            <Fab key="prev" color="primary" label="上一页"
                                        disabled={page <= 1} className={classes.leftButton}
                                 onClick={() => this.setPage(page - 1,false)} size='small'>
                                <Icon>keyboard_arrow_left</Icon>
                            </Fab>
                        }
                        {
                            `当前页：${page}`
                        }
                        {
                            <Fab key="next" color="primary"  label="下一页"
                                        disabled={page === totalPage}  className={classes.rightButton}
                                 onClick={() => this.setPage(page + 1,true)} size='small'>
                                <Icon>keyboard_arrow_right</Icon>
                            </Fab>
                        }
                    </div>
            </Toolbar>
        )
    }
}

export default withStyles(styles)(Pagination);
