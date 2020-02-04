import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const FoodMenuView: React.FC = () => {
	return (
		<Container id="food-menu-view" fluid>
			<Col>
				<h2>Food Menu</h2>
				<h4 style={{ textAlign: 'center' }}>
					Coffee will be served all weekend{' '}
					<span role="img" aria-label="steaming coffee emoji">
						☕️
					</span>
				</h4>
				<h3>Day 1: Friday February 7th</h3>
				<h4>Dinner - Shawarma Express</h4>
				<ul>
					<li>
						<b>Beef/Chicken/Falafel:</b> white pepper, sumac, cardamom, cinnamon, lemon juice, canola oil,
						red vinegar, pomegranate molasses, sesame sauce, chopped onion
					</li>
					<li>
						<b>Hummus:</b> chickpeas, sesame sauce, olive oil, lemon juice, white pepper
					</li>
					<li>
						<b>Tabbouleh/Fattoush Salad:</b> parsley, tomato, bulgur wheat, olive oil, lemon juice
					</li>
					<li>Garlic Potatoes</li>
					<li>Rice</li>
					<li>Pita</li>
				</ul>
				<h3>Day 2: Saturday February 8th</h3>
				<h4>Breakfast</h4>
				<ul>
					<li>Baked goods such as croissants, toast, muffins and so on</li>
					<li>Bagels & cream cheese</li>
					<li>Fruit</li>
				</ul>
				<h4>Lunch - Raon Kitchen (Korean Bibimbap)</h4>
				<ul>
					<li>
						<b>Beef:</b> beef, white/black rice, black pepper, garlic, ginger, green onion, onion, pear,
						rice wine, sesame oil, sesame seed, soy sauce, white sugar, plum vinegar, green cabbage, carrot,
						spinach, mushroom, egg, kimchi
					</li>
					<li>
						<b>Chicken:</b> chicken, white/black rice, apple, bell pepper, garlic, ginger, chili paste,
						green onion, onion, rice wine, sesame oil, sesame seed, soy sauce, white sugar, plum vinegar,
						green cabbage, carrot, spinach, mushroom, egg, kimchi
					</li>
					<li>
						<b>Pork:</b> pork, white/black rice, apple, bell pepper, garlic, ginger, chili paste, green
						onion, onion, rice wine, sesame oil, sesame seed, soy sauce, white sugar, vegetable oil, plum
						vinegar, green cabbage, carrot, spinach, mushroom, egg, kimchi
					</li>
					<li>
						<b>Tofu:</b> tofu, white/black rice, garlic, onion, salt, gluten-free soy sauce, white sugar,
						vegetable oil, green cabbage, carrot, spinach, mushroom, egg, kimchi
					</li>
				</ul>
				<h4>Dinner - Chillies (Indian)</h4>
				<ul>
					<li>
						<b>Butter chicken:</b> butter, tomatoes, ginger, garlic, coriander roots, onion
					</li>
					<li>
						<b>Dal makhani:</b> tomatoes , onion , fenugreek leaves (kasoori methi) spices, contains dairy
					</li>
					<li>
						<b>Vegetable korma:</b> coconut, carrot, beans, cottage cheese, green peas onion, cauliflower,
						potatoes
					</li>
					<li>
						<b>Salad:</b> mixed lettuce, carrot, tomatoes, cucumber, radish, beetroot
					</li>
					<li>
						<b>Naan:</b> contains dairy and gluten
					</li>
					<li>
						<b>Raita:</b> contains dairy
					</li>
					<li>Basmati Rice</li>
				</ul>
				<h3>Day 3: Sunday February 9th</h3>
				<h4>Breakfast</h4>
				<ul>
					<li>Baked goods such as croissants, toast, muffins and so on</li>
					<li>Pancakes</li>
					<li>Fruit</li>
				</ul>
				<h4>Lunch - La Bottega (Italian Sandwiches)</h4>
				<ul>
					<li>
						Assortment of our popular sandwiches made on a classic cirioli bun. Marinated eggplant, olives,
						hot peppers, mayonnaise and mustard served on the side.
					</li>
				</ul>
			</Col>
		</Container>
	);
};

export default FoodMenuView;
