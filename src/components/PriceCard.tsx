import { OnePrice } from "../server/MockedServer";

function PriceCard(props: {price: OnePrice})
{
    return <div className="priceCard">
        <div className="priceCardHalf">
            <div className="priceCardInfoBlock">
                <div className="priceCardNumberExecises">
                {
                    (Number(Object.keys(props.price)[0]) == Infinity) ? 
                    <p className="priceCardPriceInfo small onesmalltext">безлимит на месяц</p> : 
                    <p className="priceCardPriceInfo number">{Object.keys(props.price)[0]}</p>
                }
                </div>
                <div className="priceCardTextNumberExecises">
                {
                    (Number(Object.keys(props.price)[0]) == Infinity) ? null 
                    : (Number(Object.keys(props.price)[0]) >= 5 || Number(Object.keys(props.price)[0]) == 0) ?
                    <p className="priceCardPriceInfo small onesmalltextSecond">занятий в месяц</p> :
                    (Number(Object.keys(props.price)[0]) >= 2 || Number(Object.keys(props.price)[0]) <= 4) ?
                    <p className="priceCardPriceInfo small onesmalltextSecond">занятия в месяц</p> :
                    <p className="priceCardPriceInfo small onesmalltextSecond">занятие в месяц</p>
                }
                </div>
            </div>
            <div className="priceCardInfoBlock">
                <p className="priceCardPriceInfo">{`${props.price[Number(Object.keys(props.price)[0])][0]}₽`}</p>
            </div>
        </div>
        <div className="priceCardDelimiter"></div>
        <div className="priceCardHalf">
            <div className="priceCardInfoBlock bottom">
                <div className="priceCardNumberExecises">
                    <p className="priceCardPriceInfo green onenumber">1</p>
                </div>
                <div className="priceCardTextNumberExecises special">
                    <p className="priceCardPriceInfo small green onetext">занятие</p>
                </div>
            </div>
            <div className="priceCardInfoBlock">
                {(props.price[Number(Object.keys(props.price)[0])][1] !== null) 
                ? <p className="priceCardPriceInfo green">{`${props.price[Number(Object.keys(props.price)[0])][1]}₽`}</p> 
                : <p className="priceCardPriceInfo small green">зависит от вашей активности</p>}
            </div>
        </div>
    </div>;
}

export default PriceCard;