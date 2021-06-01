import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvh from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import { 
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
 } from './styles';

export function SignIn(){
    const { signInWithGoogle, signInWithApple, isLoading } = useAuth();
    
    const theme = useTheme();
    async function handleSignInWithGoogle(){
       try {
           
           return await signInWithGoogle();
           
       } catch (error) {
           console.log(error);
           Alert.alert('Não foi possível conectar a conta Google');
           
        } 
       
    }

    async function handleSignInWithApple(){
       try {
        
        return await signInWithApple();
       } catch (error) {
           console.log(error);
           Alert.alert('Não foi possível conectar a conta Apple');
           
       } 
    }

    

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg 
                      width={RFValue(120)}
                      height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples {'\n'}
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo {'\n'}
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    
                    <SignInSocialButton 
                        title="Entrar com Google"
                        svg={GoogleSvh}
                        onPress={handleSignInWithGoogle}
                    />
                    
                    {
                     Platform.OS === 'ios' &&
                    <SignInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />
                    }
                </FooterWrapper>

                { isLoading && 
                <ActivityIndicator 
                color={theme.colors.shape}
                style={{marginTop: 18}} 
                /> }
            </Footer>

        </Container>
    )
}