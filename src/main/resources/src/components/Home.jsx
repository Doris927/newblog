import React from 'react';
import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
//import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Hidden from '@material-ui/core/Hidden';
//import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
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
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    icon:{
        marginRight:theme.spacing.unit
    },
    avatar: {
        backgroundColor: red[500],
    }
});

const sections = [
    'Home',
    'Blog',
    'Timeline',
    'Schedule',
    'Profile',
    'About',
];

const items = [
    {
        "name":"Home",
        "menuItem": ["menu3"]
    },
    {
        "name":"Blog",
        "menuItem": ["menu1","menu2","menu3"]
    },
    {
        "name":"Timeline",
        "menuItem": ["menu1","menu2","menu3"]
    },
    {
        "name":"Schedule",
        "menuItem": ["menu1","menu2","menu3"]
    },
    {
        "name":"Profile",
        "menuItem": ["menu1","menu2","menu3"]
    },
    {
        "name":"About",
        "menuItem": ["menu2","menu3"]
    }
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];



const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class MyMenu extends React.Component{
    state = {
        anchorEl: null,
    };
    //
    //
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    //
    constructor(props){
        super(props);
    }

    render(){
        const { anchorEl } = this.state;
        return(
            <Typography>
                <Button
                aria-owns={anchorEl ? this.props.name : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                >{this.props.name}</Button>
                <Menu
                    id={this.props.name}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    {
                        this.props.menuItem.map(menuItem =>(
                            <MenuItem key={menuItem}>{menuItem}</MenuItem>
                        ))
                    }
                </Menu>
            </Typography>

        );
    }

}

class  NaviBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                items.map(item => (
                    <MyMenu key={item.name} {...item}></MyMenu>
                ))

        );

    }
}

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


class Home extends React.Component{

    state = {
        anchorEl: null,
    };



    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                <div className={classes.layout}>
                    <Toolbar className={classes.toolbarMain}>
                        {/*<Button size="small">Subscribe</Button>*/}
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="left"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            Tammy & Ge Min
                        </Typography>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <Button   size="small" className={classes.rightButton}>
                            <Icon fontSize="small" className={classes.icon}>settings</Icon>Admin
                        </Button>
                    </Toolbar>
                    <Toolbar variant="dense" className={classes.toolbarSecondary}>
                        <NaviBar></NaviBar>
                    </Toolbar>
                    <main>
                        {/* Main featured post */}
                        <Paper className={classes.mainFeaturedPost}>
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            Title of a longer featured blog post
                                        </Typography>
                                        <Typography variant="h5" color="inherit" paragraph>
                                            Multiple lines of text that form the lede, informing new readers quickly and
                                            efficiently about what&apos;s most interesting in this post&apos;s contents…
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        {/* End main featured post */}

                        <Grid container spacing={40} className={classes.mainGrid}>
                            {/* Main content */}
                            <Grid item xs={12} md={8}>
                                {
                                    featuredPosts.map(post => (
                                        <BlogItemShow  key={post.title} {...post}></BlogItemShow>
                                    ))
                                }

                            </Grid>
                            {/* End main content */}
                            {/* Sidebar */}
                            <Grid item xs={12} md={4}>
                                <Paper elevation={0} className={classes.sidebarAboutBox}>
                                    <Typography variant="h6" gutterBottom>
                                        About
                                    </Typography>
                                    <Typography>
                                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                        amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                                    </Typography>
                                </Paper>
                                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                    Archives
                                </Typography>
                                {archives.map(archive => (
                                    <Typography key={archive}>{archive}</Typography>
                                ))}
                                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                    Social
                                </Typography>
                                {social.map(network => (
                                    <Typography key={network}>{network}</Typography>
                                ))}
                            </Grid>
                            {/* End sidebar */}
                        </Grid>
                    </main>
                </div>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>


        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

