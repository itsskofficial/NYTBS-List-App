//BookItem.js
import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,ListView} from 'react-native';
const styles=StyleSheet.create({
	bookItem:{	
		flexDirection:'row',
		backgroundColor:'grey',
		borderBottomColor:'black',
		borderBottomWidth:2,
		padding:5,
		height:175
		},
	cover:
		{
		flex:1,
		height:150,
		resizeMode:'contain'
		},
	info:
		{
		flex:3,
		alignItems:'flex-end',
		flexDirection:'column',
		alignSelf:'center',
		padding:20
		},
	author:
		{
		fontSize:10
		},
	title:
		{
		fontSize:10,
		fontWeight:'bold'
		}
	});
class BookItem extends Component
	{
	render()
		{
		return
			(
			<View style={styles.bookItem}>
				<Image style={styles.cover} source= />
				<View style={styles.info}>
					<Text style={styles.author}>
						{this.props.author}
					</Text>
					<Text style={styles.title}
						{this.props.title}
					</Text>
				</View>
			</View>
			);
		}
	}
export default BookItem;