import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class App extends Component {
    render() {
        return (
            <Container fixed maxWidth="xl" className="container-custom">
                <Grid item xs={12}>
                    <h1>Lorem ipsum dolor</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis suscipit, aut vitae esse perferendis amet! Quos
                        ea accusantium error fugit molestiae illo dolore ullam,
                        itaque, accusamus fugiat eos, voluptatum harum?
                    </p>
                    <br />
                    <p>
                        By{" "}
                        <a href="https://www.felipepanegalli.com.br">
                            Panegalli
                        </a>
                    </p>
                </Grid>
            </Container>
        );
    }
}

export default App;
