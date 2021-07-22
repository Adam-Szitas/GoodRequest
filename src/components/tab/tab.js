import React, { Component, useState } from 'react'
import './tab.css';
import wallet from '../../images/icons/wallet.svg';
import paw from '../../images/icons/paw.svg';
import Prices from './prices';


export class Tab extends Component {


    constructor(props){
        super(props);
        this.state = {
            get: [],
            activeTab: 'get',
            activePrice: false,
            activeOption: false,
            getNext: false,
            firstName: false,
            lastName: false,
            eMail: false,
            phone: false,
        }
       this.changeInput = this.changeInput.bind(this);
    }

    //switch tabs
    switchTabs(tab){
        this.setState({activeTab: tab});
    }


    //onclick functions for enable buttons
    selectPrice(event,value){
        this.setState({activePrice: value});
        this.setState({getNext: true});
    }


    componentWillMount(){
        const LoadData = async () => {
            try{
                const url = 'https://frontend-assignment-api.goodrequest.com/api/v1/shelters';
                const res = await fetch(url);
                const data = await res.json();
                return data;
            }catch(err){
                console.log(err);
            }
        }
        
        LoadData().then((data) => {
            this.setState({get: data.shelters});
        });
    }

    selectOption(e){
        console.log(e.target.value);
    }

    changeInput(event,which){
        if(which == 'FN'){
            this.setState({firstName: event.target.value});   
        }else if(which == 'LN'){
            this.setState({lastName: event.target.value});
        }else if(which == 'EM'){
            this.setState({eMail: event.target.value});
        }else if(which == 'PH'){
            this.setState({phone: event.target.value});
        }
        console.log(this.state.firstName, this.state.lastName, this.state.eMail, this.state.phone);
    }
    submitForm(){
        console.log(this.state.phone);
        if(this.state.activePrice && 
            this.state.activeOption && 
            this.state.firstName && 
            this.state.lastName && 
            this.state.eMail && 
            this.state.phone){
            console.log('not empty');
        }else{
            console.log('something is empty');
        }
    }

    render() {
        const getItems = this.state.get.map(item => (
            <option key={item.id} value={item.id} selected={this.state.activeOption === item.id ? true : false}>
                {item.name}
            </option>
        ));

        return (
            <div className="pd-20x">
                <div className="tabHeaders">
                    <div eventTab="get" id='get' className={this.state.activeTab === 'get' ? "tabHeader active" : 'tabHeader'} onClick={(e) => this.switchTabs}></div>
                    <div eventTab="form" id='form' className={this.state.activeTab === 'form' ? "tabHeader active" : 'tabHeader'}></div>
                    <div eventTab="check" id='check' className={this.state.activeTab === 'check' ? "tabHeader active" : 'tabHeader'}></div>
                </div>
                <form>
                    <div data-form="get" key="get" className={this.state.activeTab === 'get' ? '' : 'hidden'}>
                        <p className="title">Vyberte si možnosť, ako chcete pomôcť</p>
                        <div className="props">
                            <div className="width-50 inline-block rectangle rectangle_left">
                                <div className="icon block">
                                    <img src={wallet} alt="wallet" />
                                </div>
                                <div className="block">
                                    <p>Chcem finančne prispieť konkrétnemu útulku</p>
                                </div>
                            </div>
                            <div className="width-50 inline-block rectangle rectangle_right active">
                                <div className="icon block">
                                    <img src={paw} alt="paw" />
                                </div>
                                <div className="block">
                                    <p>Chcem finančne prispieť celej nadácii</p>
                                </div>
                            </div>
                        </div>
                        <div className="reason">
                            <header className="reason_label">
                                <p className="width-50 inline-block text-left">O projekte</p>
                                <p className="width-50 inline-block text-right">Nepovinné</p>
                            </header>
                            <div className="reason_box">
                                <label htmlFor="reason">Útulok</label>
                                <select name="reason" id="reason" onCHange={this.selectOption}>
                                    <option selected={this.state.activeOption ? false : true} disabled className="disabled">Vyberte útulok zo zoznamu</option>

                                    { getItems }
                                </select>
                            </div>
                        </div>
                        <div className="sum">
                            <p className="text-left">Suma, ktorou chcem prispieť</p>
                            
                            <div className="sums inline-block">
                            <div className={this.state.activePrice === 5 ? "price active" : "price"} data-price="5" onClick={(e) => this.selectPrice(e,5)}>5 €</div>
                            <div className={this.state.activePrice === 10 ? "price active" : "price"} data-price="10" onClick={(e) => this.selectPrice(e,10)}>10 €</div>
                            <div className={this.state.activePrice === 20 ? "price active" : "price"} data-price="20" onClick={(e) => this.selectPrice(e,20)}>20 €</div>
                            <div className={this.state.activePrice === 30 ? "price active" : "price"} data-price="30" onClick={(e) => this.selectPrice(e,30)}>30 €</div>
                            <div className={this.state.activePrice === 50 ? "price active" : "price"} data-price="50" onClick={(e) => this.selectPrice(e,50)}>50 €</div>
                            <div className={this.state.activePrice === 0 ? "price active" : "price"} onClick={(e) => this.selectPrice('0')}>
                                <input type="text" onChange={e => this.selectPrice(e,0)}/> €
                            </div>
                        </div>
                        </div>
                        <div className="buttons flex-end">
                            <button type="button" className={this.state.getNext ?  "text-right next enabled" : "text-right next"} onClick={(e) => this.switchTabs('form')}>Pokračovať</button>
                        </div>
                    </div>
                    <div data-form="form" id="form" className={this.state.activeTab === 'form' ? '' : 'hidden'}>
                        <p className="title">Potrebujeme od Vás zopár informácií</p>
                        <div className="data">
                            <p className="text-left">O vás</p>
                            <label htmlFor="firstName">Meno</label>
                            <input type="text" name="firstName" className="data" placeholder="Zadajte Vaše meno" onChange={(e) => this.changeInput(e,'FN')}/>
                            <label htmlFor="lastName">Priezvisko</label>
                            <input type="text" name="lastName" className="data" placeholder="Zadajte Vaše priezvisko" onChange={(e) => this.changeInput(e,'LN')}/>
                            <label htmlFor="email">E-mailová adresa</label>
                            <input type="text" name="email" className="data" placeholder="Zadajte Váš e-mail" onChange={(e) => this.changeInput(e,'EM')}/>
                            <label htmlFor="phone">Telefónne číslo</label>
                            <input type="text" name="phone" className="data" placeholder="+421" onChange={(e) => this.changeInput(e,'PH')}/>

                        </div>
                        <div className="buttons">
                            <button type="button" className="text-left back" onClick={(e) => this.switchTabs('get')}>Späť</button>
                            <button type="button" className={this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.eMail.length > 0 && this.state.phone.length > 0 ? "text-right next enabled" : "text-right next"} onClick={(e) => this.switchTabs('check')}>Pokračovať</button>
                        </div>
                    </div>
                    <div data-form="check" id="check" className={this.state.activeTab === 'check' ? '' : 'hidden'}>
                        <p className="title">Skontrolujte si zadané údaje</p>
                        <div className="buttons">
                            <button type="button" className="text-left back" onClick={(e) => this.switchTabs('form')}>Späť</button>
                            <button type="button" onClick={this.submitForm}>Odoslať formulár</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Tab;
