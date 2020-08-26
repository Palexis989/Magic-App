import React, { useEffect, useState } from 'react';
import { getSpecificSet } from '../../utils/Api';
import { useParams } from 'react-router-dom';
import { getCardsFromSet } from '../../utils/Api';

export default function Sets() {

    const { setCode } = useParams();

    const [expansionsDetails, setExpansionsDetails] = useState();
    const setUri = expansionsDetails?.data.search_uri;
    console.log(setUri)

    useEffect(() => {
        const doFetch = async () => {
            const res = await getSpecificSet(setCode);
            console.log(res);
            setExpansionsDetails(res);
        }
        doFetch();
    }, [setCode])  //callback

    return (
        <>
            {/* {.map((img => {
                return (
                    <Link to={`/details/${img.data.id}`}>
                        <img src={img.data.image_uris ? `${img.data.image_uris.normal}` : `${img.data.card_faces[0].image_uris.normal}`}
                            alt={"Not found"} key={`${img.data.id}`}
                            className={classes.img} />
                    </Link>)
            }))} */}
        </>
    )
}
