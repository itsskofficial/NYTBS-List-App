//Book Section List
import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,SectionList} from 'react-native';
import BookItem from './BookItem';
import NYT from './NYT';
class BookSectionList extends Component
	{
	constructor(props)
		{
		super(props);
		this.state={sections:[]};
		}
	componentDidMount()
		{
		this._refreshData();
		}
	_addKeysToBooks=books=>
		{
		return books.map(book=>
			{return Object.assign(book,{key:book.title});)}
		};
	_refreshData=()=>
		{
		Promise
			.all([
				NYT.fetchBooks('hardcover-fiction'),
				NYT.fetchBooks('hardcover-nonfiction')
			])
			.then
				(results=>{if(results.length!==2){console.error('Unexpected Results');}
				this.setState({
						sections:[
							{
							title:'HardCover Fiction',
							data:this._addKeysToBooks(results[0])
							},
							{
							title:'HardCover NonFiction',
							data:this_addKeysToBooks(results[1])
							}						]
							});
							});
		};
	_renderItem=({item})=>
		{
		return		
			(
			<BookItem
				coverURL={item.book_image}
				title={item.key}
				author={item.author}/>
			);
		};
	_renderHeader=({section})=>
		{
		return
			(
			<Text style={styles.headingText}>
				{section.title}
			</Text>
			);
		};
	render()
		{
		return
			(
			<View style={styles.container}>
				<SectionList
					sections={this.state.sections}
					renderItem={this._renderItem}
					renderSectionHeader={this._renderHeader}/>
			</View>
			);
		}
	}
const styles=StyleSheet.create({
	container:{flex:1,paddingTop:22},
	headingText:
		{
		fontSize:24,
		alignSelf:'center',
		backgroundColor:'blue',
		fontWeight:'bold',
		paddingLeft:20,
		paddingRight:20,
		paddingTop:2,
		paddingBottom:2
		}
	});
export default BookSectionList;