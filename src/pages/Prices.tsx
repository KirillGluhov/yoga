import { useEffect, useState } from "react";
import useResize from "../hooks/use-resize";
import { OnePrice, fetchPrices } from "../server/MockedServer";
import PriceCard from "../components/PriceCard";
import PriceAdditionalCard from "../components/PriceAdditionalCard";

function Price()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();

    const [price, setPrice] = useState<Array<OnePrice>>([]);

    useEffect(() => {
        fetchPrices().then(price => 
            {
                setPrice(price)
            }
        )
    }, [])
    
    return (<div className="price" id="price">
        <div className="priceMainPart">
            <div className="priceTitleWithSecondInfo">
                <div className="priceTitle">
                    <h2 
                        className="priceTitleText" 
                    >СТОИМОСТЬ НАШИХ ТРЕНИРОВОК</h2>
                </div>
                <div className="priceSecondText">
                    <div className="priceSecondTextFirstPart">
                        <p className="priceTextCanChangeUpper topText">
                            {
                                (isScreenPC || isScreenTablet)
                                ?
                                <>После покупки абонемента его необходимо <span>активировать в течение трёх месяцев</span> с момента приобретения (дата активации - первое занятие)</>
                                :
                                <>Первая тренировка для новых клиентов <span>бесплатно!</span> </>
                            }
                        </p>
                    </div>
                    <div className="priceSecondTextSecondPart">
                        <p className="priceTextCanChangeUpper downText">
                            {
                                isScreenPC 
                                ? 
                                "Первая тренировка для новых клиентов бесплатная" 
                                : 
                                isScreenTablet 
                                ? 
                                <>Первая тренировка для новых клиентов <span>бесплатная</span></>
                                :
                                <>После покупки абонемента его необходимо <span>активировать в течение трёх месяцев</span> с момента приобретения (дата активации - первое занятие)</>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="priceAllPricesBlock">
                <div className="priceFirstColumn">
                    <div className="priceUpSmallPart">
                        {
                            (isScreenPC || isScreenTablet) ? 
                            <>
                            {
                                price.map((oneprice, index) => (
                                    (index == 0) ? 
                                    <PriceAdditionalCard price={oneprice}/> : 
                                    null
                                ))
                            }
                            </> : null
                        }
                    </div>
                    <div className="priceDownBiggerPart">
                        {
                            isScreenPC ? 
                            <button className="priceSignUp">
                                <p className="priceButtonText">ЗАПИСАТЬСЯ</p>
                            </button> : 
                            isScreenTablet ?
                            <>
                                {
                                    price.map((oneprice, index) => (
                                        (index >= 1 && index <= 2) ? 
                                        <PriceCard price={oneprice}/> : 
                                        null
                                    ))
                                }
                            </> :
                            null
                        }
                    </div>
                </div>
                <div className="priceSecondAndThirdColumn">
                    <div className="priceSecondColumn">
                        {
                            isScreenPC ?
                            <>
                                {
                                    price.map((oneprice, index) => (
                                        (index >= 1 && index <= 2) ? 
                                        <PriceCard price={oneprice}/> : 
                                        null
                                    ))
                                }
                            </> : 
                            null
                        }
                    </div>
                    <div className="priceThirdColumn">
                        <div className="priceAdditionalWrap">
                            <div className="priceCardPartInside">
                                {
                                    (isScreenPC || isScreenTablet) ?
                                    <>
                                        {
                                            price.map((oneprice, index) => (
                                                (index >= 3 && index <= 4) ? 
                                                <PriceCard price={oneprice}/> : 
                                                null
                                            ))
                                        }
                                    </> : 
                                    <>
                                    {
                                        price.map((oneprice, index) => (
                                            (index == 0) ? 
                                            <PriceAdditionalCard price={oneprice}/> : 
                                            null
                                        ))
                                    }
                                    </>
                                }
                            </div>
                            <div className="priceButtonPartInside">
                                {
                                    (isScreenMobile && !isScreenPC && !isScreenTablet) ? 
                                    <button className="priceSignUp">
                                        <p className="priceButtonText">ЗАПИСАТЬСЯ</p>
                                    </button> : null
                                }
                            </div>
                        </div>
                        <div className="priceListOfAllSm">
                            {
                                isScreenPC 
                                ? 
                                null 
                                : 
                                isScreenTablet 
                                ?
                                <button className="priceSignUp">
                                    <p className="priceButtonText">ЗАПИСАТЬСЯ</p>
                                </button> 
                                : 
                                <>
                                {
                                    price.map((oneprice, index) => (
                                        (index > 0) ? 
                                        <PriceCard price={oneprice}/> : 
                                        null
                                    ))
                                }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Price;