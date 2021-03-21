exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("products").insert([
    {
      item: "Community Support Box",
      summary: "Buy One - Help One!",
      price: 35.0,
      main_image:
        "https://firebasestorage.googleapis.com/v0/b/farms2communities.appspot.com/o/images%2Fbox-option1.jpg?alt=media&token=bae8c79b-89ab-42b2-9637-3f7dd9b48e6a",
      route: "community-support-box",
      description1:
        "Receive a generous assortment of fresh fruits and vegetables from local organic and sustainable farms – delivered to your home!",
      description2:
        "Deliveries weigh between 12-15 pounds and may include: Avocados, bananas, berries, lettuce, tomatoes, potatoes, onions, peppers, sweet potatoes, greens, cilantro, corn, melons, squash and an assortment of other fresh food from local farms.",
    },
    {
      item: "Mutual Aid Box",
      summary: "$10/Week For Qualified Families",
      price: 10.0,
      main_image:
        "https://firebasestorage.googleapis.com/v0/b/farms2communities.appspot.com/o/images%2Fbox-option2.jpg?alt=media&token=d08b6ffb-f52f-4315-8a7f-2a614f0ccd89",
      route: "mutual-aid-box",
      description1:
        "Qualified families can receive a generous assortment of fresh fruits and vegetables from local organic and sustainable farms – delivered to your home. The standard price is $35. Enter the promo code that you were given via the email from OUSD – and sign up for weekly deliveries for just $10.",
    },
    {
      item: "Donation",
    },
  ]);
  // });
};
