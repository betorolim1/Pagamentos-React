import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Grid from "../common/layout/grid"
import { Field, arrayInsert, arrayRemove } from "redux-form"
import Input from "../common/form/input"

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly)
            this.props.arrayInsert("billingCycleForm", this.props.field, index, item)
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1)//TODO: Fazer regra para desabilitar o botão quando for esta condição
        this.props.arrayRemove("billingCycleForm", this.props.field, index)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input}
                    placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input}
                    placeholder="Informe o valor" readOnly={this.props.readOnly} /></td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.add(index + 1)}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning ml-1"
                        onClick={() => this.add(index + 1, item)}
                    >
                        <i className="fa fa-clone"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger ml-1"
                        onClick={() => this.remove(index)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {//TODO: Ajustar para ser possivel cadastrar um ciclo de pagamento com apenas um debito ou credito
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)