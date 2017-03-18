import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            Home
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}