import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, Card, Paragraph, Title, Button } from 'react-native-paper';


import { View } from '../../components/Themed';
import { LIST_EVENTS } from '../../graphql/queries';

// const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

export default function ListEvents() {
  useEffect(() => {
    
  }, []);

  const { loading, error, data } = useQuery(LIST_EVENTS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;


  console.log(data);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>ListEvents</Text> */}

      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Cozy apartment in the city</Title>
          <Text>Amsterdam, The Netherlands</Text>
          <Paragraph>Apartment near beach. Close to amsterdam, small living room, kitchen, bedroom, 2 beds, private toilet</Paragraph>
          <Text>May 21 - May 22, 2021</Text>
          <Text>Nina Rumbines</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button>Book</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
