import {Button, Card} from '@mui/material';
import React, {useState} from 'react';


interface Listing {

        id: string;
        steamid: string;
        appid: number;
        currencies: {
            metal: number;
        }
        offers: number;
        buyout: number;
        details: string;
        created: number;
        bump: number;
        indent: number;
        item: {
            id: number;
            original_id: number;
            defindex: number;
            level: number;
            quality: number;
            inventory: number;
            quantity: number;
            origin: number;
            attriutes: Array<{
                defindex: number;
                value: number;
                float_value?: number;
            }>;
            name: string;

        }

}
interface ListingsResponse {
    listings: Array<Listing>;
    cap: number;
    promotes_remaining: number
}

const Dashboard: React.FC = () => {
  const [responseObject, setResponseObject] =
            useState<ListingsResponse | undefined>();
  const fetchListings = async () => {
    const res = await fetch(`https://backpack.tf/api/classifieds/listings/v1?token=${process.env.API_KEY}`);
    const json = await res.json();

    setResponseObject(json);
  };
  console.log(process.env.API_KEY);
  return (
    <div>
      <Card>
        <Button onClick={fetchListings}>Fetch listings</Button>
        {responseObject?.listings?.length && responseObject?.listings.map((l) =>
          <li key={l.id}>
            {l.item.name}
          </li>,
        )}
      </Card>
    </div>
  );
};

export default Dashboard;
