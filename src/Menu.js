import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';


const Menu = ({ resources, onMenuClick, logout }) => (
    <div>
        {resources.map(resource => (
            <MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={resource.options && (resource.options.label || resource.options.name) }
                leftIcon={createElement(resource.icon)}
                onClick={onMenuClick}
            />
        ))}
        <MenuItemLink
            to="/page1"
            primaryText="Page 1"
            leftIcon={<LabelIcon />}
            onClick={onMenuClick} />
        
        <MenuItemLink
            to="/page2"
            primaryText="Page 2"
            leftIcon={<LabelIcon />}
            onClick={onMenuClick} />
       
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(Menu));