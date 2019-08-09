import React, { Component } from "react"

import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Tabs from "../common/tab/tabs"
import TabsHeader from "../common/tab/tabsHeader"
import TabsContent from "../common/tab/tabsContent"
import TabHeader from "../common/tab/tabHeader"

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" taget="tabList" />
                            <TabHeader label="Incluir" icon="plus" taget="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" taget="tabUpdate" />
                            <TabHeader label="Excluir" icon="trach-o" taget="tabDelete" />
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle