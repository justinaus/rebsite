import Head from 'next/head';
import Image from 'next/image';

import FloatButton from '@/components/home/FloatButton';
import Part2 from '@/components/home/Part2';
import Part3 from '@/components/home/Part3';
import Section800 from '@/components/home/section/Section800';
import SectionFullWidth from '@/components/home/section/SectionFullWidth';
import { suitExtraBold } from '@/fonts/suitExtraBold';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebsite</title>
        <meta name="description" content="Rebsite" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <div>
          <SectionFullWidth>Full width</SectionFullWidth>
          <SectionFullWidth
            cssProps={{
              padding: 0,
              backgroundColor: '#808000',
            }}
          >
            Full width
          </SectionFullWidth>
          <Section800>
            <div
              css={{
                height: 800,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 20,
              }}
            >
              <h1
                css={{
                  textAlign: 'center',
                }}
              >
                Hello
              </h1>
              <span>안녕하세요. 반갑습니다. hi hello.</span>
            </div>
          </Section800>
          <Section800
            cssProps={{
              backgroundColor: '#8FBC8F',
              height: 800,
            }}
          >
            Second Section
          </Section800>
          <Section800>
            <div className={suitExtraBold.className}>
              어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 ·
              61,800P 적립 · QR 결제
            </div>
          </Section800>
          <Section800>
            <h1>
              어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 ·
              61,800P 적립 · QR 결제
            </h1>
          </Section800>
          <Section800>
            어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
            적립 · QR 결제
          </Section800>
          <Section800
            cssProps={{
              lineHeight: 0,
            }}
          >
            <div
              css={{
                position: 'relative',
                width: '100%',
              }}
            >
              <Image
                src="/assets/images/home/giphy.gif"
                alt="giphy"
                width={480}
                height={320}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Section800>
          <Part2 />
          <Part3 />
        </div>
        <FloatButton />
      </div>
    </>
  );
}
