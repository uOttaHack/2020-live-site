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
				<h4>
					Dinner{' '}
					<span role="img" aria-label="shawarma emoji">
						🌯
					</span>
				</h4>
				<h5>Shawarma Express</h5>
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
				<h4>
					Breakfast{' '}
					<span role="img" aria-label="croissant emoji">
						🥐
					</span>
				</h4>
				<ul>
					<li>Baked goods such as muffins, croissants, braided apple turnovers, mini chocolatines</li>
					<li>Kettleman's bagels & cream cheese</li>
					<li>Apples, clementines, bananas</li>
				</ul>
				<h4>
					Lunch{' '}
					<span role="img" aria-label="bento emoji">
						🍱
					</span>
				</h4>
				<h5>Raon Kitchen (Korean Bibimbap)</h5>
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
				<h4>
					Dinner{' '}
					<span role="img" aria-label="plate emoji">
						🍛
					</span>
				</h4>
				<h5>Chillies (Indian)</h5>
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
				<h4>
					Breakfast{' '}
					<span role="img" aria-label="pancake emoji">
						🥞
					</span>
				</h4>
				<ul>
					<li>Baked goods such as muffins, croissants, braided apple turnovers, mini chocolatines</li>
					<li>Kettleman's bagels & cream cheese</li>
					<li>Apples, clementines, bananas</li>
					<li>
						Pancakes{' '}
						<span role="img" aria-label="eyes emoji">
							👀
						</span>
					</li>
				</ul>
				<h4>
					Lunch{' '}
					<span role="img" aria-label="sandwich emoji">
						🥪
					</span>
				</h4>
				<h5>La Bottega (Italian Sandwiches)</h5>
				<ul>
					<li>Assorted sandwiches made on a classic cirioli bun</li>
					<li>Marinated eggplant, olives, hot peppers, mayonnaise and mustard served on the side.</li>
				</ul>
			</Col>
		</Container>
	);
};

export default FoodMenuView;
