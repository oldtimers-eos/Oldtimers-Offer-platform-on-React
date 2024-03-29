# Oldtimers dApp v1.0.1

Oldtimers dApp is created with React (typescript) and Smart Contract. 
#### The project is live on https://old-token.xyz/
The smart contract used in this dapp is deployed on EOS EVM Testnet (https://explorer-testnet.trust.one/address/0x0EB7dA9e8b7f85Bc801BaeB718BE0476B48Bb9Be). 

## Usage

### Install

Install the dApp:

```sh
$ yarn install
```


### Start

Run the dApp:

```sh
$ yarn start
```

## Oldtimers dApp (only Rent option in v1.0.1) Details

Oldtimers (Rent & Buy) dApp is made up of team members from the Oldtimers Offer platform. The dApp is a Proof of Concept for Renting & Buying Classic Vehicles and belongs as a part of applying for the [ENF Grant](https://eosnetwork.com/blog/eos-network-foundation-grant-framework-guidelines/) program. Our hard work is open source and helps developers to create similar dApps for the marketplace on the blockchain. 
The dApp has the following advantages and rules:

-   **1. Easy to list a classic vehicle on blockchain(v1):** Users can very simply add a vehicle to the blockchain. It is a free service.

-   **2. Owner of a vehicle has privilege(v1):** The vehicle owner can add and change details of the vehicle. Except for simple details such as Exterior Color, Transmission, Miles,... the owner can set the option is the vehicle available for rent or sale (maybe both solutions) and what is the price for that. 

-   **2.b. An advantage in addDetails Function(v1):** When a vehicle is rented, the owner can not put an available for rent option and in that way, we build trust and reputation among application users. (Innovative Solution!)

-   **3. Vehicle Reviews(v2):** In the smart contract exist the function "giveReviewScore" which allow users to give review points from 0 to 10 to some vehicle. The smart contract has a view function "getReviews" which allows us to see all points for some particular vehicle.

-   **3.b. An advantage in Vehicle Reviews(v2):** The review point to a vehicle can give only users who rent that vehicle and the smart contract is secured so that users can make it only one time. In that way, we prevent some kind of manipulation. We have finally trusted review points on market (Innovative Solution!). 

-   **4. Service fee(v1):** We already mentioned that listing is free, but we put on our dApp (smart contract) fee for renting and selling and in that way we create a profitable blockchain solution. The creator of the SC can change the fee for renting or selling. Also, with "accumulatedProfit" we can follow how much money make our application (smart contract).

-   **5. Renting a vehicle (Innovative Solution!)(v1):** During the creation of renting function in our smart contract we tried to make high light of the blockchain function. We certainly think that we succeeded in that. Why? Let's explain in the next step.

-   **5.b Advantage in Vehicle Rent function(v1):** In our function, we covered the following issues: a. Only the owner of the vehicle can add or remove the vehicle from the renting list. That is a decentralized approach. b. The owner can't rent owned vehicle, and in that way, we secure a review score. c. When the user pays exactly or more for rent, the money goes automatically to the vehicle owner (smart contract calculated the profit). d. We map who rents the vehicle last and what time, on that way owner has clear evidence for the court if something happens with the vehicle (Innovative Solution!). e. The owner of the vehicle can't put an available-for-rent option at the moment when the vehicle is rented. f. We map how much is vehicle rented and which wallet address

-   **6. Buying a vehicle (Innovative Solution!)(v2):** During the creation of this smart contract, our idea was first to make a brand new smart contract only for buying a vehicle. After research, we find out that if we add the buying option we can not just have more options for owners of the vehicle but make the best covered smart contract for the marketplace. We decided to add that future as well. Let's explain in the next step, what we covered with buying a vehicle option.

-   **6.b Advantage in Vehicle Buy function(v2):** In our function, we covered the following rules: a. Only the owner of the vehicle can add or remove the vehicle from the buying list. That is a decentralized approach. b. When the user pays exactly or more for buying the vehicle, the money goes automatically to the previous vehicle owner (smart contract calculated the profit). c. We map who buys the vehicle, in that way the new owner has the option to add details and a rent/buy option. The previous owner is automatically removed for that privilege.

### Business Architecture

If you are confused because of the previous explanation, don't worry. We have prepared it for you [Business Architecture](https://miro.com/app/board/uXjVPq5__rU=/?share_link_id=994333599006). Enjoy! We are available for all questions at the email address office@oldtimersoffer.com

