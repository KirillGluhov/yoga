import { OnePrice } from "../server/MockedServer";

function PriceAdditionalCard(props: {price: OnePrice})
{
    return <div className="priceAddCard">
        <div className="priceCardHalf">
            <div className="priceCardInfoBlock">
                <p className="priceCardPriceInfo green notgreen">{`${props.price[Number(Object.keys(props.price)[0])][0]}₽`}</p>
            </div>
        </div>
        <div className="priceCardDelimiter"></div>
        <div className="priceCardHalf">
            <div className="priceCardInfoBlock bottom">
                <div className="priceCardNumberExecises">
                    <p className="priceCardPriceInfo onenumber notgreen">1</p>
                </div>
                <div className="priceCardTextNumberExecises special">
                    <p className="priceCardPriceInfo small onetext">занятие</p>
                </div>
            </div>
        </div>
    </div>;
}

export default PriceAdditionalCard;